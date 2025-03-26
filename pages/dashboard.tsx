import React, { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { withAuth } from "@/utils/withAuth";
import {
  useVeltClient,
  VeltComments,
  VeltCommentTool,
  VeltPresence,
  VeltNotificationsTool,
  VeltCommentsSidebar,
  VeltSidebarButton,
} from "@veltdev/react";
import { auth } from "@/firebase";
import Link from "next/link";

const Dashboard = () => {
  const { logout } = useAuth();
  const { client } = useVeltClient();

  // Generate random hex color
  const getBgColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Get text color based on background color
  const getTextColor = (backgroundColor: string) => {
    const hex = backgroundColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness >= 128 ? "#000" : "#fff";
  };

  useEffect(() => {
    const initVelt = async () => {
      if (client && auth?.currentUser) {
        const user = {
          userId: auth?.currentUser?.uid,
          organizationId: "default",
          name: auth?.currentUser?.displayName,
          email: auth?.currentUser?.email,
          photoUrl: auth?.currentUser?.photoURL,
          color: getBgColor(),
          textColor: getTextColor(getBgColor()),
        };

        await client.identify(user);
      }
    };
    initVelt().catch(console.error);
  }, [client]);

  useEffect(() => {
    if (client) {
      client.setDocument("collaborative-article-review", {
        documentName: "Web Development Insights",
      });
    }
  }, [client]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 relative">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <nav className="flex flex-row justify-between items-center p-6 bg-gray-50 border-b">
          <h1 className="text-3xl font-bold text-gray-800">
            DevInsights: Modern Web Development
          </h1>
          <div className="flex items-center space-x-4">
            <VeltCommentTool />
            <VeltNotificationsTool />
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
              Logout
            </button>
          </div>
        </nav>

        <header className="flex justify-between p-4 bg-blue-50">
          <div className="flex items-center">
            <h2 className="mr-2 font-semibold">Online Contributors:</h2>
            <VeltPresence />
          </div>
          <div className="text-sm text-gray-600">
            Status: Community Review Draft
          </div>
        </header>

        <main className="p-8">
          <article>
            <header className="mb-8">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                The Evolution of Web Development in 2024
              </h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <span>By @Pels</span>
                <span>·</span>
                <time dateTime="2024-03-25">March 25, 2024</time>
                <span>·</span>
                <span>10 min read</span>
              </div>
            </header>

            <section id="commentable-introduction" className="mb-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                The landscape of web development is undergoing a profound
                transformation, driven by emerging technologies, changing user
                expectations, and the continuous push for more efficient,
                scalable, and interactive web applications. As we navigate
                through 2024, several key trends are reshaping how developers
                approach building digital experiences.
              </p>
            </section>

            <section id="commentable-trends" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Key Trends Defining Web Development
              </h3>

              <div id="commentable-ai-integration" className="mb-6">
                <h4 className="text-xl font-medium mb-2">
                  1. AI-Powered Development
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Artificial Intelligence is no longer just a buzzword but a
                  fundamental tool in modern web development. From code
                  generation to intelligent debugging, AI is streamlining
                  development processes and enabling developers to focus on more
                  complex problem-solving.
                </p>
              </div>

              <div id="commentable-serverless" className="mb-6">
                <h4 className="text-xl font-medium mb-2">
                  2. Serverless and Edge Computing
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The shift towards serverless architectures continues to gain
                  momentum. Platforms like Vercel, Netlify, and cloud providers
                  are making it easier to deploy scalable applications with
                  minimal infrastructure management, reducing operational
                  overhead and improving performance.
                </p>
              </div>

              <div id="commentable-web-components" className="mb-6">
                <h4 className="text-xl font-medium mb-2">
                  3. Web Components and Micro Frontends
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Modular development approaches are becoming mainstream. Web
                  Components and Micro Frontend architectures allow teams to
                  build more maintainable, scalable applications by breaking
                  down complex interfaces into smaller, independent modules.
                </p>
              </div>
            </section>

            <section id="commentable-collaboration" className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                The Rise of Collaborative Development Tools
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In an increasingly distributed work environment, collaboration
                tools have become crucial. Platforms like Velt are
                revolutionizing how development teams interact, providing
                real-time commenting, presence indicators, and seamless
                communication channels directly within the development workflow.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
                &quot;Collaboration is no longer an afterthought, but a core
                design principle in modern web development.&quot; - Anonymous
                Developer
              </blockquote>
            </section>

            <section id="commentable-conclusion" className="mb-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Conclusion
              </h3>
              <p className="text-lg text-gray-800 leading-relaxed">
                As web technologies continue to evolve, developers must remain
                adaptable, continuously learning and embracing new tools and
                methodologies. The future of web development is not just about
                writing code, but creating meaningful, interactive, and
                collaborative digital experiences.
              </p>
            </section>
          </article>
        </main>

        <footer className="bg-gray-50 p-6 text-center text-gray-600">
          <p>
            Created by{" "}
            <Link
              href="https://tech.timonwa.com/links"
              target="_blank"
              className="text-blue-500 ubderline">
              Timonwa
            </Link>
            .{" "}
            <Link href="#" target="_blank" className="text-blue-500 ubderline">
              MIT License
            </Link>
            .
          </p>
        </footer>

        {/* Velt Components */}
        <div className="fixed bottom-10 right-10 z-50 space-y-4">
          <VeltSidebarButton />
          <VeltCommentsSidebar pageMode={true} />
          <VeltComments />
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
