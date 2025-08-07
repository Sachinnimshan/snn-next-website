// src/config/iotProjects.ts

export interface IoTProject {
    id: number;
    title: string;
    period: string;
    description: string;
    technologies: string[];
    image?: string; // optional: you can add logos or images later
}

export const iotProjects: IoTProject[] = [
    {
        id: 1,
        title: "Smart Pond Motor & Light Automation System",
        period: "June 2025 - Present",
        description:
            "Built a smart control system to manage pond filter and lighting using ESP32 microcontroller. Developed a React web app to control the pond motor remotely, optimizing power usage by running it only when needed. Automated pond lights for nighttime use and scheduled motor operation to save electricity. Used Firebase Realtime Database to sync device states with the cloud for live mobile and web control.",
        technologies: [
            "ESP32",
            "Firebase Realtime Database",
            "React",
            "Node.js",
            "Relay Module",
        ],
        image: "/images/projects/pond-automation.png", // Update this path as needed
    },
];
