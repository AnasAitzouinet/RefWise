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
import { useState } from "react"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { DialogClose } from "@radix-ui/react-dialog"
import { useToast } from "@/components/ui/use-toast"



export function PopUpForm({ children }: FormProps) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })
  const [loading, setLoading] = useState(false)
  // const [submitted, setSubmitted] = useState(false)


  const { toast } = useToast()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if(submitted) return
    setLoading(true)
    // setSubmitted(true)
    try {
      const res = await fetch('/api/JoinUs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      const data = await res.json()
      console.log(data)
      if (!data.error) {
        setLoading(false)
        document.getElementById('cancel')?.click()
        toast({
          title: 'Thank you for joining RefWise',
          description: 'We will keep you updated on new features and updates',
          variant: 'success'
        })
      } else {
        toast({
          title: data.error,
          variant: 'destructive'
        })
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <form onSubmit={handleSubmit}>
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
            <Input id="name"
              disabled={loading}
              onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Your name" />
            <Label htmlFor="email">Email</Label>
            <Input id="email"
              disabled={loading}
              onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Your email" />
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              disabled={loading}
              id="phone" onChange={(e) => setUser({ ...user, phone: e.target.value })} type="number" placeholder="Your phone number" />
            <Label htmlFor="company">Company Name</Label>
            <Input
              disabled={loading}
              id="company" onChange={(e) => setUser({ ...user, company: e.target.value })} placeholder="Your company name" />
          </div>
          <DialogFooter className="flex-col justify-center gap-y-2 my-2 w-full">
            <Button type="submit" className="bg-rose-500 hover:bg-rose-700 w-full">
              {loading ? <Loader className="animate-spin" size={20} /> : 'Join Now'}
            </Button>
            <DialogClose>
              <Button id="cancel" type="button" className="bg-neutral-900 w-full">
                Cancel
              </Button>
            </DialogClose>

          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
