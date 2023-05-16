import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useState, useEffect } from 'react';

const supabase = createClient(
    "https://cgfkffojgainwpbbxkfc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZmtmZm9qZ2FpbndwYmJ4a2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNDgxNzAsImV4cCI6MTk5OTgyNDE3MH0.lq3wGNCVwPw2PuIbmY54cd7CZeK14KvR-Iwq19MPHaw"
)



function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                //value.data.user
                if(value.data?.user) {
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/");
    }


  return (
    <div>success
    <button onClick={() => signOutUser()}> signOut</button></div>
  )
}

export default Success