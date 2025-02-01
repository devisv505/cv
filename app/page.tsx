"use client"
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, Printer } from "lucide-react";
import { AvatarImage } from "@radix-ui/react-avatar";

const CV = () => {
  const [showMore, setShowMore] = useState(false);
  const jobs = [
    {
      title: "Software Engineer - bol.com",
      duration: "Mar 2022 - Present",
      description: `As a member of the finance team at bol.com, I work on data streaming projects that securely gather financial data from different teams into our application. We consolidate and reformat the information, making it ready for efficient transfer to external systems. This process not only uses protocols like HTTP and SOAP but also leverages event-driven architecture with tools such as Google Pub/Sub.

Key Contributions:
- Took a key role in a core project that standardized how we implement multiple adapters. This streamlined our processes for reading and writing messages, connecting to external services, and ensuring detailed logging for error tracing.

Team Involvement:
- Actively participated in regular Kotlin knowledge-sharing sessions, supporting our team’s continuous learning and technical growth.`,
    },
    {
      title: "Backend Consultant (part-time) - Agora World",
      duration: "May 2020 - Mar 2022",
      description:
        `We built a platform like TikTok but focused on advertising beauty products. As a part-time backend consultant, I was deeply involved in revamping its backend, moving from a monolith to microservices. We leveraged technologies like Kotlin, PostgreSQL, Redis, AWS, and protobuf for communication, which really boosted the app’s scalability and overall performance.

Key Contributions:

- Led the transition from a large monolithic architecture to a streamlined microservices system.
- Designed and built a feed service that processes and curates the most engaging content tailored for each user.`,
    },
    {
      title: "Senior Java Developer - HeadHunter Group",
      duration: "May 2019 - Dec 2021",
      description:
        "I manage the backend operations for the employer's personal account section, ensuring everything runs smoothly behind the scenes. Additionally, I lead the user notification service, where I work to keep our communication fast, reliable, and seamless across the platform.",
    },
    {
      title: "Senior Java Developer - Infotech Grouр",
      duration: "Jan 2018 - May 2019 ",
      description:
        `In this company, my team was involved in several projects. 
- One of them was a platform for reporting about a problem on a road. 
- The second one was a platform of immediate response for a security system.
- And the last one was a module of planning human resources which can be integrated into any project in the company. `,
    },
    {
      title: "Senior Java Developer - Luxoft",
      duration: "Mar 2017 - Dec 2017",
      description:
        `One of the customers of this company is the biggest retailer of household appliances. 
Our team was splitting up a monolith system into micro-services architecture. Many of these services worked with big data. For example one of that service each week transfer all payments from Oracle to another system. There were a billion payments.`,
    },
    {
      title: "Team Lead - ABR Region",
      duration: "Sep 2010 - Mar 2017",
      description:
        `The main direction of this company is to load charges of housing services and create a document for paying these charges and get pays. 
The main applications:
- System for loading a charge of housing services with the ability to support all possible formats.
- API gateway to get payments from a third party (Banks, Post, etc.). We had around a million payments per day.
- A web platform for paying a charge of housing services.`,
    },
  ];
  

  const skills = [
    "Kotlin",
    "Java",
    "Spring Framework",
    "Distributed Systems",
    "Google Cloud GCP",
    "AWS",
    "Docker / Kubernetes",
    "SQL Database",
    "NoSQL Database",
    "Event-Driven Architecture",
  ];

  const education = [
    {
      institution: "Volga State University of Service",
      degree: "Engineering, Programmer-Economist",
      duration: "2002 – 2007",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white">
      {/* Header */}
      <Card className="p-6 flex flex-col items-center text-center bg-white text-gray-900 border border-gray-200">
        <Avatar className="w-28 h-28 border-4 border-gray-300 rounded-full">
          <AvatarImage src="/avatar.jpg" />
        </Avatar>
        <h1 className="text-3xl font-bold mt-4">Denis Vasilev</h1>
        <p className="text-lg text-gray-700">Java / Kotlin Backend Developer</p>
        <div className="flex flex-wrap gap-2 pt-4">
          <a href="mailto:devisv505@gmail.com">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <Mail className="w-4 h-4" /> devisv505@gmail.com
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/devisv/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/devisv505"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </a>
          {/* Print Button – hidden in printed output */}
          <Button
            variant="outline"
            onClick={() => window.print()}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 print:hidden"
          >
            <Printer className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Skills Section */}
      <Card className="bg-white text-gray-900 border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section for Screen – shows limited jobs with “Show More” */}
      <Card className="bg-white text-gray-900 border border-gray-200 print:hidden">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Experience</h2>
          <div
            className="relative pl-6 grid gap-6 after:absolute after:inset-y-0 
            after:w-px after:bg-gray-500/20 after:left-0 dark:after:bg-gray-400/20"
          >
            {jobs.slice(0, 3).map((job, index) => (
              <div key={index} className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium text-blue-600">{job.title}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300 " style={{ whiteSpace: 'pre-line' }}>
                  {job.description}
                </p>
              </div>
            ))}
            {showMore &&
              jobs.slice(3).map((job, index) => (
                <div key={index + 3} className="grid gap-1 text-sm relative">
                  <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                  <div className="font-medium text-blue-600">{job.title}</div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {job.duration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300" style={{ whiteSpace: 'pre-line' }}>
                    {job.description}
                  </p>
                </div>
              ))}
          </div>
          {!showMore && (
            <Button
              className="mt-4 bg-gray-100 text-gray-900 hover:bg-gray-200"
              onClick={() => setShowMore(true)}
            >
              Show More
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Experience Section for Print – always shows all jobs */}
      <Card className="bg-white text-gray-900 border border-gray-200 hidden print:block">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Experience</h2>
          <div
            className="relative pl-6 grid gap-6 after:absolute after:inset-y-0 
            after:w-px after:bg-gray-500/20 after:left-0 dark:after:bg-gray-400/20"
          >
            {jobs.map((job, index) => (
              <div key={index} className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="font-medium text-blue-600">{job.title}</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {job.duration}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card className="bg-white text-gray-900 border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium text-blue-600">
                  {edu.institution}
                </h3>
                <p className="text-sm text-gray-500">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CV;
