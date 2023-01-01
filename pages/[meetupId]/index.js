import MeetupDetail from "../../components/meetups/MeetupDetail";
import { createClient } from "@supabase/supabase-js";

function MeetupDetails(props) {
  const LiveData = JSON.parse(props.meetupData);

  if (LiveData == null) {
    return (
      <MeetupDetail
        src=""
        alt="This page does not exist"
        address=""
        description=""
      ></MeetupDetail>
    );
  } else {
    return (
      <MeetupDetail
        src={LiveData.src}
        alt={LiveData.alt}
        address={LiveData.address}
        description={LiveData.description}
      ></MeetupDetail>
    );
  }
}

export async function getServerSideProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

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

  let LiveData = (await UserList()).filter((A) => A.id == meetupId)[0];

  if (LiveData == undefined) {
    LiveData = null;
  }

  return {
    props: {
      meetupData: JSON.stringify(LiveData),
    },
  };
}

export default MeetupDetails;
