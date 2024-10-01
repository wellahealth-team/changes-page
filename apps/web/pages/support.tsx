export function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
  };
}

function EmptyPage() {
  return null;
}

export default EmptyPage;
