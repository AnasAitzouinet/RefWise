"use client"

interface FormProps {
    children: React.ReactNode
}
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PopUpForm({ children }: FormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
         {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>
            Join RefWise
          </DialogTitle>
          <DialogDescription>
            Be the first to know about new features and updates.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-start">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Your email" />
            
        </div>
        <DialogFooter>
          <Button type="submit">Join Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
