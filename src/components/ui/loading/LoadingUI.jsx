import { AbsoluteCenter, Box } from "@chakra-ui/layout";
import loadingVideo from "../../../../public/loading/animation_lmarsiar.mp4";
import "./style.css";

export default function LoadingUI() {
  return (
    // <Box
    //   height={"100%"}
    //   width={"100%"}
    //   border={"1px solid red"}
    //   margin={"auto"}
    // >
    <AbsoluteCenter>
      {/* <Box> */}
      <div className='video-wrapper'>
        <video playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src={loadingVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* </Box> */}
    </AbsoluteCenter>
    // </Box>
  );
}
