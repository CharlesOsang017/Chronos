import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft, CheckCircle, Loader, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVerifyEmailMutation } from "@/hooks/use-auth";
import { toast } from "sonner";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [isSuccess, setIsSuccess] = useState(false);

  const token = searchParams.get("token");
  const { mutate, isPending: isVerifying } = useVerifyEmailMutation();
  useEffect(() => {
    if (token) {
      mutate({ token },{
          onSuccess: () => {
            setIsSuccess(true);
          },
          onError: (error: any) => {
            setIsSuccess(false);
            const errorMessage = error?.response?.data?.message;
            toast.error(errorMessage || "something went wrong");
          },
        }
      );
    }
  }, [searchParams]);
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-2xl font-bold'>Verify Email</h1>
      <p className='text-sm text-gray-500 mb-2'>Verifying your email...</p>
      <Card className='w-full max-w-md'>
        {/* <CardHeader>
          <Link to={"/sign-in"} className='flex items-center gap-2 text-sm'>
            <ArrowLeft className='w-4 h-4 mr-2' />
            Back to sign in
          </Link>
        </CardHeader> */}
        <CardContent>
          <div className='flex flex-col items-center justify-center py-4'>
            {isVerifying ? (
              <>
                <Loader className='flex flex-col text-gray-500 animate-spin' />
                <h3 className='text-lg font-semibold'>Verifying Email...</h3>
                <p className='text-sm text-gray-500'>
                  Please wait while we verify your email
                </p>
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className='w-10 h-10 text-green-500' />
                <h3 className='text-lg font-semibold'>Email Verified</h3>
                <p className='text-sm text-gray-500'>
                  Your email has been verified successfully
                </p>
                <Link to={"/sign-in"} className='text-sm mt-2 text-blue-500'>
                  <Button variant={"outline"}>Back to signin</Button>
                </Link>
              </>
            ) : (
              <>
                <XCircle className='w-10 h-10 text-red-500' />
                <h3 className='text-lg font-semibold'>
                  Email Verification Failed
                </h3>
                <p className='text-sm text-gray-500'>
                  Your Email Verification failed. Please try again
                </p>
                <Link to='/sign-in' className='text-sm mt-2 text-blue-500'>
                  <Button variant={"outline"}>Back to Sign in</Button>
                </Link>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VerifyEmail;
