import MeetupList from "../components/meetups/MeetupList";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";
import { Fragment } from "react";

/*const DUMMY = [
  {
    id: "m1",
    title: "A first meetup",
    image: {
      src: "636bace0bfd4d8a1c1592894_ui-017.png",
      alt: "Picture of the author",
    },
    address: "An address",
    description: "This is a description",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: {
      src: "636bace0bfd4d8a1c1592894_ui-017.png",
      alt: "Picture of the author",
    },
    address: "An address",
    description: "This is a description",
  },
  {
    id: "m3",
    title: "A third meetup",
    image: {
      src: "636bace0bfd4d8a1c1592894_ui-017.png",
      alt: "Picture of the author",
    },
    address: "An address",
    description: "This is a description",
  },
];*/

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name='description'
          content='Browse a huge list of highly actice React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>;
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const UserList = async () => {
    const { data: tableTest } = await supabase
      .from("meetups")
      .select("*")
      .order("id", true);
    return tableTest;
  };

  return {
    props: {
      meetups: JSON.stringify(await UserList()),
    },
  };
}

export default HomePage;
