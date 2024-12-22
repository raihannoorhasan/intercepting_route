export default function VideoLayout({ children, authmodal }) {
  // console.log(authmodal);
  return (
    <>
      {children}
      {authmodal}
    </>
  );
}
