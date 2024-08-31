<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        $query = DB::table('products');

        if ($request->has('search') && $request->search !== '') {
            $query->where('name', 'like', '%' . $request->search . '%');
        }
        // Status filter
        if ($request->has('status') && in_array($request->status, ['1', '0'])) {
            $query->where('status', $request->status);
        }

        $data = $query->paginate(5);
        return Response()->json($data);
    
    }

    public function store(Request $request)
    {
        // return response()->json(['status'=>'success','message'=>$request->image]);
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'category' => 'required',
            'price' => 'required',
            'keywords' => 'required',
            'stock' => 'required',
            'status' => 'required',
            'image' => 'required',
        ], []);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'errors' => $validator->errors()->toArray()]);
        } else {
            if ($request->hasFile('image')) {
                $file = $request->file('image');
                $orginalImageName = $file->getClientOriginalName();
                $newImgName = Str::slug(date('YmdHis') . '-' . $orginalImageName) . '.' . $file->extension();
                $file->storeAs('public/images/products', $newImgName);
            }
            $date = date('Y-m-d H:i:s');
                $data = [
                    'name'=>$request->name,
                    'category_id'=>$request->category,
                    'price'=>$request->price,
                    'image'=>$newImgName,
                    'keywords'=>$request->keywords,
                    'stock'=>$request->stock,
                    'status'=>$request->status,
                    'created_at'=>$date,
                    'updated_at'=>$date
                ];
                DB::table('products')->insert($data);
            
       return response()->json(['status'=>'success','message'=>'Product Has Been Inserted...']);
    }
}

public function edit($id)
{
    $data = DB::table('products')->where('id',$id)->first();
    return response()->json($data);
}

public function update(Request $request,$id)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'category' => 'required',
        'price' => 'required',
        'keywords' => 'required',
        'stock' => 'required',
        'status' => 'required',
    ], []);

    if ($validator->fails()) {
        return response()->json(['status' => 'error', 'errors' => $validator->errors()->toArray()]);
    } else {

        $product = DB::table('products')->where('id',$request->id)->first();
                if ($request->hasFile('image')) {

                    if (File::exists("assets/images/products/" . $product->image)) {

                        File::delete("assets/images/products/" . $product->image);
                    }
                    $file = $request->file('image');
                    $orginalImageName = $file->getClientOriginalName();
                    $newImgName = Str::slug(date('YmdHis') . '-' . $orginalImageName) . '.' . $file->extension();
                    $file->storeAs('public/images/products', $newImgName);
                    $req['image'] = $newImgName;
                } else {
                    $newImgName = $product->image;
                }
        $date = date('Y-m-d H:i:s');
            $data = [
                'name'=>$request->name,
                'category_id'=>$request->category,
                'price'=>$request->price,
                'image'=>$newImgName,
                'keywords'=>$request->keywords,
                'stock'=>$request->stock,
                'status'=>$request->status,
                'updated_at'=>$date
            ];
            DB::table('products')->where('id',$request->id)->update($data);
        
   return response()->json(['status'=>'success','message'=>'Product Has Been Updated...']);
}

}

public function delete($id)
{
    DB::table('products')->where('id',$id)->delete();
    return response()->json(['status'=>'success','message'=>'Product Has Been Deleted....']);
}


public function user_testing(Request $request)
{
    $user = DB::table('user_testing')->where('email',$request->email)->first();
    if(!$user)
    {
        $data = [
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'company_name'=>$request->company_name,
            'domain'=>$request->domain,
            'password'=>Hash::make($request->password)
        ];
        DB::table('user_testing')->insert($data);
    
        return response()->json(['status'=>'success','message'=>'Data Has Been Inserted...']);
    }
    else
    {
        return response()->json(['status'=>'failed','message'=>'This email already exist please try with another email']);
    }
}


public function login(Request $request)
{
   $user = DB::table('user_testing')->where('email',$request->email)->first();
   if($user)
   {
       if(Hash::check($request->password,$user->password))
       {
        // $user->createToken($request->email)->plainTextToken;
        return response()->json(['message'=>'Login Successfully','status'=>'success']);
       }    
       else
       {
        return response()->json(['message'=>'password in invalid','status'=>'failed']);
       }
   }
   else
   {
    return response()->json(['message'=>'email in invalid','status'=>'failed']);
   }
}

public function forget_password(Request $request)
{

$user = DB::table('user_testing')->where('email',$request->email)->first();
if($user)
{
return response()->json(['status'=>'success','message'=>'Email sent for password reset please check your email']);
}
else
{
    return response()->json(['status'=>'failed','message'=>'Email does not exist...']);
}

}

}
