import { useNavigation } from "react-router-dom";

const SubmitBtn = (props: SubmitBtnProps) => {
  const { text } = props;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};
export default SubmitBtn;
