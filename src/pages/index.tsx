import { MapPin, User, Users } from "lucide-react"
import { Geist, Geist_Mono } from "next/font/google"
import Image from "next/image"
import { useState } from "react"
import { Button } from "reception/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "reception/components/ui/card"
import { Input } from "reception/components/ui/input"
import { Label } from "reception/components/ui/label"
import { Toaster } from "reception/components/ui/toaster"
import createComponentClient from "reception/lib/supabaseClient"
import { useRSVPs } from "reception/lib/useRSVPs"
import { useToast } from "reception/lib/useToast"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function Home() {
  const { rsvps, isLoadingRSVPs, refetchRSVPs } = useRSVPs()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    partyName: "",
    partySize: "",
    allergies: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Basic front-end validation
    const sizeInt = Number.parseInt(formData.partySize, 10)
    if (!formData.partyName.trim() || Number.isNaN(sizeInt) || sizeInt < 1) {
      return
    }

    setSubmitting(true)
    try {
      const supabase = createComponentClient()
      const { error } = await supabase.from("reception").insert({
        party_name: formData.partyName.trim(),
        party_size: sizeInt,
        allergies: formData.allergies.trim(),
      })

      if (error) {
        console.error(error)
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "RSVP submitted successfully",
          variant: "success",
        })
        refetchRSVPs()
        setFormData({ partyName: "", partySize: "", allergies: "" })
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }))

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <Toaster />
      <main className="flex flex-col items-center ">
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-8 max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Alex &amp; Sierra
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                Wedding Rehearsal Dinner
              </p>
              <p className="text-sm text-gray-500">July 12, 2025</p>
            </div>

            {/* Wedding Photo */}
            <div className="mb-8">
              <Image
                src="/reception.png?height=300&width=400"
                alt="Alex and Sierra"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Location */}
            <Card className="mb-8">
              <CardContent className="px-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-rose-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Rehearsal Venue & Schedule
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Godfrey Residence
                      <br />
                      5509 E Lake Rd
                      <br />
                      Dewittville, NY 14728
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Arrive 3:30 PM - 3:45 PM
                      <br />
                      Rehearsal 4:00 PM - 5:00 PM
                      <br />
                      Drive to Uma's
                      <br />
                      Dinner 5:30PM - 7:30 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RSVP Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-center text-gray-800">
                  Please RSVP
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label
                      htmlFor="partyName"
                      className="text-sm font-medium text-gray-700"
                    >
                      Party Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="partyName"
                      type="text"
                      placeholder="Fig & Kiwi"
                      value={formData.partyName}
                      onChange={(e) =>
                        handleInputChange("partyName", e.target.value)
                      }
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="partySize"
                      className="text-sm font-medium text-gray-700"
                    >
                      Party Size <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="partySize"
                      type="number"
                      placeholder="2"
                      min="1"
                      max="10"
                      value={formData.partySize}
                      onChange={(e) =>
                        handleInputChange("partySize", e.target.value)
                      }
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="allergies"
                      className="text-sm font-medium text-gray-700"
                    >
                      Dietary Restrictions
                    </Label>
                    <Input
                      id="allergies"
                      type="text"
                      placeholder="Milk"
                      value={formData.allergies}
                      onChange={(e) =>
                        handleInputChange("allergies", e.target.value)
                      }
                      className="mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Submit RSVP"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* RSVP List */}
            {rsvps?.length ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-center text-gray-800 flex items-center justify-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Who&rsquo;s Coming</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {rsvps.map((rsvp) => (
                      <div
                        key={rsvp.id}
                        className="flex items-center justify-between p-3 bg-white rounded-lg border"
                      >
                        <div className="flex items-center space-x-3">
                          <User className="h-4 w-4 text-gray-400" />
                          <p className="font-medium text-gray-800 text-sm">
                            {rsvp.party_name}
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                          {rsvp.party_size}{" "}
                          {rsvp.party_size === 1 ? "guest" : "guests"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t">
                    <p className="text-center text-sm text-gray-600">
                      Total guests:{" "}
                      {rsvps.reduce((sum, r) => sum + r.party_size, 0)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-8">
          to edit rsvp, contact me@alexgodfrey.com
        </p>
      </main>
    </div>
  )
}
