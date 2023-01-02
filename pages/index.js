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

  const supabaseUrl = "https://nqiqbrbppsxdqttqsyrj.supabase.co"//process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xaXFicmJwcHN4ZHF0dHFzeXJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyMDU0NjMsImV4cCI6MTk4NTc4MTQ2M30.61V08-OYtV5MjxP3_8gMEFWFOrZhgnjgTbE3Ca8Dr7k"//process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
