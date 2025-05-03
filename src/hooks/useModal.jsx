import AppDownloadDialog from "@/components/shared/navigation/AppDownloadDialog";
import AuthDialog from "@/components/shared/navigation/AuthDialog";
import LoginRequiredDialog from "@/components/shared/navigation/LoginRequiredDialog";
import {
  setAuthModalStatus,
  setDownloadAppDialogOpen,
  setLoginModalStatus,
} from "@/store/module/shared/sharedSlice";
import { useDispatch, useSelector } from "react-redux";

function useModal() {
  const { isAuthModalOpen, isLoginModalOpen, downloadAppDialogOpen } =
    useSelector((state) => state.shared);
  const dispatch = useDispatch();

  const setIsAuthDialogOpen = (isOpen) => {
    dispatch(setAuthModalStatus(isOpen));
  };
  const setLoginRequiredDialogOpen = (isOpen) => {
    dispatch(setLoginModalStatus(isOpen));
  };
  const setAppDownloadDialogOpen = (isOpen) => {
    dispatch(setDownloadAppDialogOpen(isOpen));
  };

  const authModal = (
    <AuthDialog isOpen={isAuthModalOpen} setIsOpen={setIsAuthDialogOpen} />
  );
  const loginModal = (
    <LoginRequiredDialog
      isOpen={isLoginModalOpen}
      setIsOpen={setLoginRequiredDialogOpen}
      setIsAuthDialogOpen={setIsAuthDialogOpen}
    />
  );
  const appDownloadModal = (
    <AppDownloadDialog
      isOpen={downloadAppDialogOpen}
      setIsOpen={setAppDownloadDialogOpen}
    />
  );

  return {
    authModal,
    loginModal,
    appDownloadModal,
    setIsAuthDialogOpen,
    setLoginRequiredDialogOpen,
    setAppDownloadDialogOpen,
  };
}

export default useModal;
