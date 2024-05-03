import { ActionFunctionArgs, Form, json } from "react-router-dom";
import { Button } from "../ui/button";
import { logout } from "../../services/authAction";
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = await formData.get("intent");

  if (intent === "logout") {
    const deleteSession = await logout();
    console.log(deleteSession);
    
    return json(null)
  }

  console.log("no intent found");
  return json({ msg: "hello" });
}

export default function LogOut() {
  return (
    <Form method="post">
      <Button name="intent" value="logout">
        Logout now
      </Button>
    </Form>
  );
}
