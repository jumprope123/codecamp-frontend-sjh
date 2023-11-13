import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  writer: yup.string().required("작성자를 입력해주세요."),
  title: yup.string().required("타이틀을를 입력해주세요."),
  contents: yup.string().required("내용을 입력해주세요."),
  //   email: yup
  //     .string()
  //     .email("이메일 형식에 맞지 않습니다.")
  //     .required("이메일은 필수입니다."),
  //   password: yup
  //     .string()
  //     .required("비밀번호는 필수입니다")
  //     .min(4, "비밀번호는 최소 4자리 이상입니다.")
  //     .max(15, "비밀번호는 최대 15자리입니다."),
  //   phone: yup
  //     .string()
  //     .matches(/^\d{3}-\d{3,4}-\d{4}$/, "휴대폰 형식에 맞지 않습니다.")
  //     .required("휴대폰은 필수입니다."),
});

interface IFormData {
  writer: string;
  title: string;
  contents: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange", // 변경할때마다 검증하겠다. (안쓰면 비제어컴포넌트가 되어서 onSubmit이 눌릴때만 검증함)
  });

  const onClickSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickSubmit)}>
        작성자 : <input type="text" {...register("writer")} />
        <div>{formState.errors.writer?.message}</div>
        제목 : <input type="text" {...register("title")} />
        <div>{formState.errors.title?.message}</div>
        내용 : <input type="text" {...register("contents")} />
        <div>{formState.errors.contents?.message}</div>
        <button
          style={{ backgroundColor: formState.isValid ? "yellow" : "red" }}
        >
          등록하기
        </button>
      </form>
    </>
  );
}

// <button type="button">나만의 버튼</button>
// <button type="reset">지우기</button>
// <button type="submit">제출하기</button>
