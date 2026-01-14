🔹 Git Merge x Git Rebase

I work with both Git Merge and Git Rebase.

I usually use git merge when I'm part of a big team, because it creates a merge commit and keeps the feature branch history, so we can see when and where the merge happened.

When I work with smaller teams, I usually use git rebase, because it puts the feature branch on top of the main branch, creating a cleaner and linear history, which is easier to read.

So, I choose between merge and rebase depending on the team and workflow.

Git Merge

With Git Merge, we create a new merge commit and keep the feature branch history separated from the main branch.
This is good because we can see when and where the merge happened.
The downside is that the history can become messy, with many branches and storylines.

Git Rebase

With Git Rebase, we move the feature branch on top of the main branch.
This creates a linear and cleaner history, which is easier to read.
The downside is that rebase rewrites history, so it should not be used on shared branches.

🔹 TanStack Query (React Query)

About TanStack Query, also known as React Query:

I have worked with TanStack Query because it is a great React library for server state management.

It helps improve performance by avoiding unnecessary re-renders and reducing code repetition, especially for common states like loading, error, and caching.

I don’t need to use useEffect to fetch data anymore, and the code is cleaner.

React Query avoids unnecessary requests and keeps data consistent across components, so we don’t re-fetch the same data multiple times

🔹 React Hook Form + Zod

I work with React Hook Form because it helps me manage form state and avoid unnecessary re-renders of inputs, which improves performance.

I usually combine React Hook Form with Zod, where I define a schema with validation rules and type safety for the form data.

I use a resolver to connect Zod with React Hook Form, so validation and typing are handled automatically during form submission.

This combination gives me safe validation, strong typing, and good performance when working with forms.

🔹 Jotai

I’ve worked with Context API, and I think it’s fine for simple or small projects.

However, when the global state grows, Context can cause many re-renders, because when the context value changes, all consumers re-render.

That’s why I like Jotai, because with Jotai I can split the state into small atoms. Each atom is an isolated piece of state, so when I update one atom, only the components that use that atom re-render.

This gives better performance and more control over state updates compared to a big global context.

🔹 Reablocks (basic interview explanation)

I haven’t used Reablocks in production yet, but I know it’s a component library focused on reusable building blocks.

It helps keep a clean component hierarchy and consistent UI, which makes the codebase easier to maintain. But I’ve worked with other component libraries and design systems, so the learning curve wouldn’t be a problem for me.

🔹 WHY AND HOW TO USE REACT HOOK FORM WITH ZOD?

“I usually use React Hook Form to handle form state and events, and Zod as the single source of truth for validation and typing.”

“React Hook Form is responsible for collecting user input efficiently, with minimal re-renders.”
“Zod defines the shape and rules of the data.”

“By connecting both through a resolver, validation happens automatically during submission, and if it passes, I receive fully validated and typed data in the submit handler.”

“This approach keeps validation centralized, improves maintainability, and scales well as forms become more complex.”

“I treat Zod as a contract for my data and React Hook Form as the execution layer.”

“Zod defines what valid data looks like, including constraints and edge cases.”
“I infer TypeScript types directly from the Zod schema to avoid duplication.”

“React Hook Form handles the form lifecycle with good performance.”
“The resolver acts as a bridge between both, so the form only submits when the data matches the schema.”

“This gives me strong guarantees about data correctness and keeps business rules out of the UI layer.”

---

When do you prefer rebase over merge?
Any risks with rebase?
Do you use rebase on shared branches?

I usually use rebase on my local feature branches to keep a clean history.
I avoid rebasing shared branches because it rewrites commit history and can cause conflicts for the team.

Why do some teams forbid rebase on main?

Because rebase rewrites history. On shared branches, this can break other developers’ work.

---

useQuery is used to fetch and cache server data.
It automatically handles loading, error, and success states, and keeps data in sync with the server.

It also avoids refetching data unnecessarily by using caching and background refetch.

useMutation is used for create, update, or delete operations.
After a successful mutation, I usually invalidate or update related queries to keep the data consistent.

I usually call queryClient.invalidateQueries after the mutation succeeds.

---

Why is React Query performant?

Because it avoids unnecessary network requests and re-renders.
It caches server data, shares it across components, and updates only when the data really changes.

React Query is focused on server state.
It doesn’t control inputs directly, so it doesn’t cause input re-renders like local state might.

Is React Query a replacement for Redux?

No. React Query is for server state.
Redux or other state managers are usually for client or global UI state.

---

Why React Hook Form instead of controlled inputs?
How does it improve performance?
Why combine it with Zod?

React Hook Form reduces re-renders because inputs are mostly uncontrolled.
That makes forms more performant, especially large ones.

Zod allows me to define a schema for validation and typing.
Using a resolver, I can validate and type the form data automatically on submit.

Can you use React Hook Form without Zod?

Yes. Zod is optional.
It’s useful when we want schema-based validation and strong typing.

---

Why Jotai instead of Context?
When would Context be enough?

Context works well for simple global state.
But it can cause unnecessary re-renders.
With Jotai, I can split state into atoms and update only what is needed.

“Is Jotai better than Redux?”

It depends on the project.
Jotai is great for simple and medium global state.
Redux is better when we need strict structure or complex workflows.

---

I haven’t used Reablocks yet, but I’ve worked with other UI libraries.
I’m comfortable learning component-based design systems.

---

Server state I usually manage with React Query.
Global client state with something like Jotai when needed.
And local state stays inside components.

---

What’s the difference between server state and client state?

Server state is data that comes from the backend and can change outside the app.
Client state is data that lives only inside the frontend, like UI state or form state.

---

I have a background in advertising and graphic design.

I worked in an agency, and I started doing small HTML and CSS tasks.

I really enjoyed building things and understanding how the web works,
so I decided to move fully into programming.

Today, this background helps me think not only as a developer,
but also about UX, users and product.

---

From what I’ve seen, Dropzone AI builds AI-driven tools for cybersecurity teams to automate investigation of alerts, reducing manual workload and improving response speed.
