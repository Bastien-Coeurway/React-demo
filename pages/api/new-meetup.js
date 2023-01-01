import { createClient } from "@supabase/supabase-js";

function handler(req, res) {
  const data = req.body;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  async function supaInsert(data) {
    const { queryData, error } = await supabase.from("meetups").insert([
      {
        title: data.title,
        src: data.src,
        alt: data.alt,
        address: data.address,
        description: data.description,
      },
    ]);
    
    return true;
  }

  supaInsert(data);

  res.status(201).json({message: 'meetup inserted'})
}

export default handler;
