import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DogLandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Paw-some Dogs</h1>
        <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Loyal Companions</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Dog loyalty" className="mx-auto object-cover w-full h-48 mb-4 rounded-lg" />
            <p>Dogs are known for their unwavering loyalty and devotion to their human families.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Playful Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Dog playing" className="mx-auto object-cover w-full h-48 mb-4 rounded-lg" />
            <p>With their boundless energy and enthusiasm, dogs make excellent playmates for all ages.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emotional Support</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Dog comforting" className="mx-auto object-cover w-full h-48 mb-4 rounded-lg" />
            <p>Dogs have an innate ability to sense and respond to human emotions, providing comfort and support.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose a Dog?</h2>
        <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
          <li>Unconditional love and affection</li>
          <li>Encourage an active lifestyle</li>
          <li>Reduce stress and anxiety</li>
          <li>Teach responsibility to children</li>
          <li>Provide security for your home</li>
        </ul>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Ready to Meet Your New Best Friend?</h2>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Find a Dog Near You</Button>
      </section>
    </div>
  );
};

export default DogLandingPage;