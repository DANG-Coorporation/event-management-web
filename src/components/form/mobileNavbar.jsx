import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeviceInfo } from "../../app/features/deviceDetection/deviceDetectionSlicer";

export default function MobileNavbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDeviceInfo());
  }, [dispatch]);

  const device = useSelector((state) => state.deviceDetection);
  return <></>;
}
