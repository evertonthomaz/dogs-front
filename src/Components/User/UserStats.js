import React from "react";
import { STATS_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";

const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);

      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
};

export default UserStats;
