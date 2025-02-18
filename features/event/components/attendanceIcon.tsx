import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons";

export const attendanceIcon = (attendance: boolean) => {
  return attendance ? (
    <CheckCircleIcon boxSize="20px" color="green" />
  ) : (
    <SmallCloseIcon boxSize="20px" color="gray" />
  );
};
