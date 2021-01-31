import {
  CheckCircleOutlined,
  CheckCircleTwoTone,
  HeartOutlined,
  HeartTwoTone,
  StarTwoTone,
} from "@ant-design/icons";

export default  StarColored = () => {
  return <StarTwoTone />;
};

export const CheckCircleColored = ({ onClick, ...rest }) => {
  return <CheckCircleTwoTone {...rest} onClick={onClick} />;
};

export const CheckCircle = ({ onClick, ...rest }) => {
  return <CheckCircleOutlined {...rest} onClick={onClick} />;
};
export const HeartColored = ({ onClick, ...rest }) => {
  return <HeartOutlined {...rest} onClick={onClick} />;
};
export const HeartColored = ({ onClick, ...rest }) => {
  return <HeartTwoTone {...rest} onClick={onClick} />;
};
