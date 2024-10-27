import { FormEvent, useState } from "react";
import { ID } from "appwrite";
import { account } from "@/lib/appwriteConf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { login } from "../storage/userSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch<any>();

  const signupUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      // Create a new user account in Appwrite
      const user = await account.create(ID.unique(), email, password, name);
      console.log(user);
      console.log("User created successfully", user);
      dispatch(login({ name, email }));

      // Log user
      const session = await account.createEmailPasswordSession(email, password);
      console.log("User logged in successfully", session);

      window.location.reload();
    } catch (err: any) {
      console.error("Failed to create user", err);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>Signup</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Signup</DialogTitle>
            <DialogDescription>
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full  text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-6 border  text-cyan-900 border-gray-300 rounded-lg"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="font-bold w-1/2">Cancel</Button>

            <Button className="w-1/2" onClick={signupUser}>
              Signup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Signup;
