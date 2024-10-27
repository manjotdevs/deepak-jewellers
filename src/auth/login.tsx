import { FormEvent, useState } from "react";
import { account } from "@/lib/appwriteConf";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const LoginUser = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await account.createEmailPasswordSession(email, password);
      console.log("User logged in successfully", user);
      setIsOpen(false);
    } catch (err: any) {
      console.error("Failed to log in:", err.message);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Login</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login</DialogTitle>
            <DialogDescription>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-cyan-900 p-3 mb-4 border border-gray-300 rounded-lg"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-6 border text-cyan-900 border-gray-300 rounded-lg"
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              className="font-bold w-1/2"
              onClick={() => setIsOpen(false)} // Close dialog on cancel
            >
              Cancel
            </Button>
            <Button className="w-1/2" onClick={LoginUser}>
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Login;
