import { useRouter } from 'next/router';
import { FieldErrors, useForm } from 'react-hook-form';
import Image from 'next/image';
import signUpImage from '/public/signup.png';
import axios from 'axios';

interface SignUpForm {
  nickname: string;
  id: string;
  pw: string;
  checkPw?: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<SignUpForm>({
    mode: 'onChange',
  });
  const router = useRouter();

  const onValid = (data: SignUpForm) => {};
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onSubmit = async ({ nickname, id, pw }: SignUpForm) => {
    // setLoading(true);
    console.log({ nickname, id, pw });
    // const { id, pw } = data;
    try {
      const response = await axios.post('/signup', { nickname, id, pw });
      console.log(response);
    } catch (error: any) {
      alert(error.response.data);
    }
    // setLoading(false);
  };

  return (
    <div className=" flex h-screen items-center justify-around p-16">
      <div className="h-4/5 w-2/5">
        <Image
          src={signUpImage}
          alt="signUP Image"
          placeholder="blur"
          className="h-auto w-auto rounded-3xl"
        ></Image>
      </div>
      <div className="h-4/5 w-2/5 rounded-3xl bg-slate-300">
        <div className="p-8 text-center text-4xl font-bold">회원가입 폼</div>
        <div>
          <form
            className="flex flex-col p-20"
            // onSubmit={handleSubmit(onValid, onInvalid)}
            onSubmit={handleSubmit(onSubmit, onInvalid)}
          >
            <label className="font-semibold">Nick Name</label>
            <input
              {...register('nickname', {
                required: '사용할 닉네임을 적으세요.',
                minLength: {
                  message: '닉네임은 5글자 이상 적으세요',
                  value: 5,
                },
              })}
              type="text"
              placeholder="NickName"
              className={`${
                Boolean(errors.nickname?.message)
                  ? 'border-4 border-red-700'
                  : 'border border-black'
              }`}
            />
            <span className="text-red-700">{errors.nickname?.message}</span>
            <label className="mt-8 font-semibold">ID</label>
            <input
              {...register('id', {
                required: '사용할 아이디를 적으세요.',
                minLength: {
                  message: '아이디는 5글자 이상 적으세요',
                  value: 5,
                },
              })}
              type="text"
              placeholder="ID"
              className={`${
                Boolean(errors.id?.message)
                  ? 'border-4 border-red-700'
                  : 'border border-black'
              }`}
            />
            <span className="text-red-700">{errors.id?.message}</span>
            <label className="mt-8 font-semibold">PW</label>
            <input
              {...register('pw', {
                required: '사용할 비밀번호를 적으세요.',
                minLength: {
                  message: '비밀번호는 5글자 이상 적으세요',
                  value: 5,
                },
              })}
              type="password"
              placeholder="Password"
              className={`${
                Boolean(errors.pw?.message)
                  ? 'border-4 border-red-700'
                  : 'border border-black'
              }`}
            />
            <span className="text-red-700">{errors.pw?.message}</span>
            <label className="mt-8 font-semibold">Check PW</label>
            <input
              {...register('checkPw', {
                required: '비밀번호를 다시 적으세요.',
                minLength: {
                  message: '비밀번호는 5글자 이상 적으세요',
                  value: 5,
                },
                validate: (values) => {
                  const { pw } = getValues();
                  return pw === values || '패스워드가 일치하지 않습니다.';
                },
              })}
              type="password"
              placeholder="CheckPassword"
              className={`${
                Boolean(errors.checkPw?.message)
                  ? 'border-4 border-red-700'
                  : 'border border-black'
              }`}
            />
            <span className="text-red-700">{errors.checkPw?.message}</span>
            <button
              className="mx-auto mt-8 w-40 rounded-md bg-blue-500 font-semibold"
              type="submit"
            >
              회원가입
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
