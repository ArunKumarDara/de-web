import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link as ScrollLink } from 'react-scroll';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <ScrollLink to="hero"
              smooth={true}
              duration={500}
              offset={-100}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">DE</span>
              </span>
              <span className="font-bold text-lg">DineExpress</span>
            </ScrollLink>
          </motion.div>

          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <ScrollLink
                  to="products"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium hover:text-amber-600 transition-colors cursor-pointer"
                >
                  Products
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium hover:text-amber-600 transition-colors cursor-pointer"
                >
                  Features
                </ScrollLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ScrollLink
                  to="how-it-works"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium hover:text-amber-600 transition-colors cursor-pointer"
                >
                  How It Works
                </ScrollLink>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <ScrollLink
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium hover:text-amber-600 transition-colors cursor-pointer"
                >
                  Testimonials
                </ScrollLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            <Button variant="outline">Login</Button>
            <Button className="bg-amber-600 hover:bg-amber-700">Sign Up</Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4" id="hero">
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-6"
          >
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
              Fastest Delivery in Town
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fresh Food & Groceries <span className="text-amber-600">Delivered</span> to Your Door
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Order from your favorite local stores and get everything delivered in under 30 minutes.
              No app required - shop directly from our web platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollLink
                to="products"
                smooth={true}
                duration={500}
                offset={-100}
              >
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 h-12">
                  Order Now
                </Button>
              </ScrollLink>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-amber-600 text-amber-600 hover:bg-amber-50"
              >
                Learn More
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {["arun2", "honey", "megna2"].map((item) => (
                  <img
                    key={item}
                    src={`/${item}.jpg`}
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Trusted by 100+ customers</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                  <span className="ml-1">4.7 (50+ reviews)</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 rounded-full bg-amber-200 blur-3xl opacity-40"></div>
              <div className="relative rounded-2xl border bg-white p-4 shadow-xl overflow-hidden">
                <img
                  src="/foodD.jpg"
                  alt="Dine-Express Web Platform"
                  className="rounded-xl w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm">Your order is arriving!</p>
                      <p className="text-xs text-muted-foreground">Estimated delivery: 12 min</p>
                    </div>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 h-8">
                      Track
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Popular Categories
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Shop What You Love</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need, all in one place.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Fresh Produce",
                items: "Fruits, Vegetables, Herbs",
                image: "/veg.jpg",
                popular: "Seasonal Fruits"
              },
              {
                name: "Bakery Delights",
                items: "Breads, Pastries, Desserts",
                image: "/cake.jpg",
                popular: "Artisan Breads"
              },
              {
                name: "Pantry Essentials",
                items: "Grains, Spices, Oils",
                image: "/pantry.jpg",
                popular: "Organic Options"
              },
              {
                name: "Ready-to-Eat Meals",
                items: "From Local Restaurants",
                image: "/biyani.jpg",
                popular: "Chef Specials"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden group">
                  <div className="relative h-48 bg-amber-100 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Badge className="absolute top-3 left-3 bg-amber-600 hover:bg-amber-700">
                      Popular: {category.popular}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.items}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="link" className="text-amber-600 p-0">
                      Shop Now →
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-amber-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold mb-4">The Dine-Express Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're revolutionizing the way you shop for groceries and daily essentials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "No App Required",
                description: "Full functionality directly from your browser",
                icon: "🌐"
              },
              {
                title: "Wide Selection",
                description: "Hundreds of local stores at your fingertips",
                icon: "🛒"
              },
              {
                title: "Fast Checkout",
                description: "Save your details for quicker future orders",
                icon: "⚡"
              },
              {
                title: "Real-Time Tracking",
                description: "Watch your order from store to doorstep",
                icon: "📍"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full text-center p-6">
                  <span className="text-3xl mb-4">{feature.icon}</span>
                  <CardTitle className="mb-2">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold mb-4">How Dine-Express Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get your groceries and meals in just a few clicks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Your Store",
                description: "Browse local grocery stores, bakeries, and restaurants in your area.",
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: "2",
                title: "Add Items to Cart",
                description: "Select your favorite products and add them to your cart.",
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                step: "3",
                title: "Fast Delivery",
                description: "Checkout and get your order delivered to your doorstep in minutes.",
                icon: (
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader className="items-center">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                      {step.icon}
                    </div>
                    <div className="space-y-2">
                      <span className="text-sm font-medium text-amber-600">Step {step.step}</span>
                      <CardTitle>{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Products Section */}


      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-amber-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200 mb-4">
              Customer Love
            </Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from people who use Dine-Express regularly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Valabhya",
                role: "College Student",
                quote: "The ready-to-eat meals from local restaurants are a lifesaver during exams. Fast delivery and great packaging!",
                rating: 4,
                image: "/honey.jpg"
              },
              {
                name: "Arun Kumar",
                role: "Regular Customer",
                quote: "Dine-Express has transformed my grocery shopping. The quality of fresh produce is consistently excellent and delivery is always on time.",
                rating: 5,
                image: "/arun2.jpg"
              },
              {
                name: "Akhil",
                role: "Working Professional",
                quote: "As someone with a busy schedule, Dine-Express saves me hours every week. The bakery items are fresh and delicious!",
                rating: 4,
                image: "/male-avatar2.jpg"
              },
              {
                name: "Ajay",
                role: "Home Chef",
                quote: "I rely on Dine-Express for all my cooking needs. Their selection of spices and pantry items is unmatched in our area.",
                rating: 5,
                image: "/male-avatar3.jpg"
              },
              {
                name: "Priya",
                role: "School Student",
                quote: "Grocery shopping with kids was a nightmare. Now with Dine-Express, I get everything delivered while the kids nap!",
                rating: 5,
                image: "/female-avatar1.jpg"
              },

              {
                name: "Meghana",
                role: "Office Manager",
                quote: "We use Dine-Express for our office snacks and supplies. Reliable service and excellent customer support.",
                rating: 5,
                image: "/megna2.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {testimonial.rating}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-500 fill-current' : 'text-gray-300'}`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Convenient Delivery?</h2>
            <p className="text-amber-100 text-lg">
              Sign up now and get your first delivery with 20% off!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 placeholder:text-amber-100 text-white h-12"
              />
              <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 h-12">
                Get Started
              </Button>
            </div>
            <p className="text-amber-100 text-sm">
              No credit card required. Get started in seconds.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DE</span>
                </span>
                <span className="font-bold text-lg">Dine-Express</span>
              </div>
              <p className="text-gray-400">
                Delivering happiness to your doorstep. Experience the best food delivery service in your city.
              </p>
              <div className="flex gap-4">
                <a
                  // href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  // href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  // href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Blog", "Press"].map((link, index) => (
                  <li key={index}>
                    <ScrollLink
                      to="home"
                      smooth={true}
                      className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2">
                {["Help Center", "Safety Center", "Contact Us"].map((link, index) => (
                  <li key={index}>
                    <ScrollLink
                      to="home"
                      smooth={true}
                      className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2">
                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((link, index) => (
                  <li key={index}>
                    <ScrollLink
                      to="home"
                      smooth={true}
                      className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {link}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-sm"
          >
            <p className="text-gray-400">© {new Date().getFullYear()} Dine-Express. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <ScrollLink
                to="home"
                smooth={true}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Privacy Policy
              </ScrollLink>
              <ScrollLink
                to="home"
                smooth={true}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Terms of Service
              </ScrollLink>
              <ScrollLink
                to="home"
                smooth={true}
                className="text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
              >
                Cookies
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;