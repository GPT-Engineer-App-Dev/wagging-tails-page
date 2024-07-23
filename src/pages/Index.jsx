import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Dog, Heart, PlayCircle, Shield } from "lucide-react";

const DogLandingPage = () => {
  const [selectedTab, setSelectedTab] = useState("loyalty");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <motion.header 
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Paw-some Dogs</h1>
        <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
      </motion.header>

      <Tabs defaultValue="loyalty" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="loyalty" onClick={() => setSelectedTab("loyalty")}>Loyal Companions</TabsTrigger>
          <TabsTrigger value="playful" onClick={() => setSelectedTab("playful")}>Playful Friends</TabsTrigger>
          <TabsTrigger value="support" onClick={() => setSelectedTab("support")}>Emotional Support</TabsTrigger>
        </TabsList>
        <TabsContent value="loyalty">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Heart className="mr-2 text-red-500" /> Loyal Companions</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Dog loyalty" className="mx-auto object-cover w-full h-64 mb-4 rounded-lg" />
              <p className="text-lg">Dogs are known for their unwavering loyalty and devotion to their human families. They'll stand by your side through thick and thin.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="playful">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><PlayCircle className="mr-2 text-green-500" /> Playful Friends</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Dog playing" className="mx-auto object-cover w-full h-64 mb-4 rounded-lg" />
              <p className="text-lg">With their boundless energy and enthusiasm, dogs make excellent playmates for all ages. They'll keep you active and entertained.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="support">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center"><Shield className="mr-2 text-blue-500" /> Emotional Support</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg" alt="Dog comforting" className="mx-auto object-cover w-full h-64 mb-4 rounded-lg" />
              <p className="text-lg">Dogs have an innate ability to sense and respond to human emotions, providing comfort and support when you need it most.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <motion.section 
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose a Dog?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="text-lg py-2 px-4">Unconditional love</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Active lifestyle</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Stress reduction</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Teach responsibility</Badge>
          <Badge variant="secondary" className="text-lg py-2 px-4">Home security</Badge>
        </div>
      </motion.section>

      <Separator className="my-8" />

      <motion.section 
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Ready to Meet Your New Best Friend?</h2>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 text-lg py-6 px-8">
          <Dog className="mr-2" /> Find a Dog Near You
        </Button>
      </motion.section>
    </div>
  );
};

export default DogLandingPage;