export const CheckValidationFile = (file?: File) => {
  if (file?.size == null) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 5mb보다 큽니다.");
    return false;
  }

  if (!file.type.includes("jepg") && !file.type.includes("png")) {
    alert("파일 확장자를 확인하세요.");
    return false;
  }

  return true;
};
