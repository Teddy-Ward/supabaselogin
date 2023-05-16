import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient(
    "https://cgfkffojgainwpbbxkfc.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZmtmZm9qZ2FpbndwYmJ4a2ZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNDgxNzAsImV4cCI6MTk5OTgyNDE3MH0.lq3wGNCVwPw2PuIbmY54cd7CZeK14KvR-Iwq19MPHaw"
)


function LoginPage() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event == "SIGNED_IN") {
            //forward to success url
            navigate("/success");
        } else {
            //forward to home
            navigate("/");
        }
    })

  return (
    
    <div>
        <h1>LoginPage</h1>
<div style={{width:'300px'}}>
            <Auth 
            supabaseClient={supabase}
            appearance={{
                theme: ThemeSupa,
            }}
            providers={[]}
        />
</div>

    </div>
  )
}

export default LoginPage