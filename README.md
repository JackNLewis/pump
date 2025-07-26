Getting Started
{add steps to clone and start}


Project Structure
Navigator
- Stack
    - Bottom Tabs Navitagtor
        - Exercise 
        - Explore 
        - Workouts
        - Profile
            - History
            - Stats
    - Group (Creating a workout) 
        - AddWorkout - Contain Exercise state
        - AddExercise
        - SearchExercise
        - Camera - update exercise
    - ViewWorkout props -> Exercise
    - Group (Social)
        - Followers
        - Following
        - Search User
    - Group (Sign in flow)
        - login
        - register
        - createaccount
        - account recovery

Components
- Navigation
- Buttons
- Inputs
- Cards


Styles
- color.ts
- typograph.ts
- spacing.ts

API - each file represents a request to api 

Lib - represents functionality needed across components





Needs Fixing
Files with Multiple Components:

  - screens/main/explore.tsx - 3 components (CardHeader, WorkoutCard, Explore)
  - screens/social/people.tsx - 6 components (ProfileCard, FollowButton, FollowingTab, FollowersTab, PeopleTabNavigator, People)
  - screens/main/mainNav.tsx - 3 components (DummyScreen, TabOptions, MainNav)
  - screens/social/searchUser.tsx - 2 components (UserCard, SearchUser)

  Files with Non-Standard Component Format:

  - Arrow function pattern (const Component = () => {}):
    - screens/create/searchExercise.tsx
    - screens/main/profile.tsx
    - screens/main/exercises.tsx
    - components/SearchBar.tsx
    - components/ExercisesContent.tsx
    - components/ProfileHeader.tsx
    - components/SharedWorkouts.tsx
    - components/ActivitySection.tsx
  - React.FC pattern (const Component: React.FC = () => {}):
    - screens/ViewWorkout.tsx
    - components/MonthWorkouts.tsx
    - components/ProfileStat.tsx
    - components/Exercise.tsx







