
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MapPin, Camera } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, Country",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
  });

  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your changes have been saved successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {/* Profile Header */}
            <div className="relative h-48 bg-gray-900">
              <div className="absolute -bottom-12 left-8">
                <div className="relative">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-24 h-24 rounded-full border-4 border-white object-cover"
                  />
                  <button className="absolute bottom-0 right-0 p-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="pt-16 pb-8 px-8">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-heading font-semibold">
                  {profile.name}
                </h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  {isEditing ? "Cancel" : "Edit Profile"}
                </button>
              </div>

              <div className="space-y-6">
                {/* Profile Fields */}
                {[
                  { icon: User, label: "Name", value: profile.name },
                  { icon: Mail, label: "Email", value: profile.email },
                  { icon: Phone, label: "Phone", value: profile.phone },
                  { icon: MapPin, label: "Address", value: profile.address },
                ].map((field) => (
                  <div key={field.label} className="flex items-start gap-4">
                    <field.icon className="w-5 h-5 mt-1 text-gray-400" />
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-500">
                        {field.label}
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={field.value}
                          onChange={(e) =>
                            setProfile({
                              ...profile,
                              [field.label.toLowerCase()]: e.target.value,
                            })
                          }
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                        />
                      ) : (
                        <p className="mt-1 text-gray-900">{field.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Save Button */}
                {isEditing && (
                  <button
                    onClick={handleSave}
                    className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
