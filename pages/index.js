import Widget from '../components/Widget'

export default function Home({datas}) {

  // const {data, isLoading} = useGetDatas();

  return <Widget datas={datas} />
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/datas')

  const datas = await res.json()

  return {
    props: {
      datas
    }
  }
}


