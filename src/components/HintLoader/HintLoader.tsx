import ContentLoader from "react-content-loader";

export const HintLoader = () => (
  <ContentLoader
    speed={1}
    width={54}
    height={18}
    viewBox="0 0 54 18"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-2"
  >
    <rect x="60" y="39" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="4" ry="4" width="54" height="18" />
  </ContentLoader>
);
