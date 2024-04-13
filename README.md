
# DevLink

DevLink is a collaborative platform for developers to create and join rooms, where they can collaborate, share knowledge, and work together on projects. With features like room browsing, video calls, screen sharing, and project management, DevLink aims to foster a supportive community for developers to connect and grow together.

## Features

- **Room Creation and Joining**: Developers can create rooms for specific projects or topics and browse existing rooms to join.
- **Real-time Collaboration**: DevLink enables real-time collaboration through features like live chat, video calls, and screen sharing within rooms.
- **Google Authentication**: Secure user authentication is implemented using Google authentication through NextAuth.
- **Database Integration**: DevLink utilizes Drizzle ORM to create and manage PostgreSQL databases for storing room and user data.
- **Video Calls and Screen Sharing**: Integration with GetStream.io enables developers to engage in video calls and share their screens for effective communication and collaboration.
- **Project Management**: Developers can use DevLink to manage their projects, track progress, and organize tasks within rooms.
- **Room Deletion**: After completing their projects or tasks, users can delete rooms to keep the platform organized and clutter-free.

## Technologies Used

- **TypeScript**: TypeScript ensures type safety and improves code quality.
- **Next.js**: Next.js provides server-side rendering, routing, and other features for building robust web applications.
- **NextAuth**: NextAuth is used for implementing secure authentication with Google OAuth and other authentication providers.
- **Drizzle ORM**: Drizzle ORM simplifies database interactions and management by providing an intuitive interface for working with PostgreSQL databases.
- **GetStream.io**: GetStream.io is used to enable video calls and screen sharing features, enhancing real-time collaboration capabilities.

## Getting Started

To get started with DevLink, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/devlink.git
   ```

2. Install dependencies:

   ```bash
   cd devlink
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory and define the following environment variables:

   ```plaintext
   DATABASE_URL="REPLACE ME WITH THE REAL URL OF YOUR POSTGRES DATABASE"
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   NEXTAUTH_SECRET="make_this_something_secret"
   NEXT_PUBLIC_GET_STREAM_API_KEY=""
   GET_STREAM_SECRET_KEY=""
    NEXTAUTH_URL=http://localhost:3000
   # Add other environment variables as needed
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to access DevLink.

## Contributing

Contributions to DevLink are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new Pull Request.

Please ensure your code adheres to the existing code style and conventions.

## License

DevLink is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Contact

If you have any questions, suggestions, or issues regarding DevLink, feel free to contact us at [kyadapavan0016@gmail.com].

Let's collaborate and grow together!

