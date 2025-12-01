import BreadCrumb from "@/Components/BreadCrumbs/BreadCrumb";
import CodeBlock from "@/Components/ui/CodeBlock";
import TreeStructure from "../ExploreTopics/Tree/TreeStructure";

type breadCrumbType = {
  breadCrumb: string;
};

type GuideStep = {
  title: string;
  description: string;
  fileName: string;
  code: string;
  language?: string;
};

const reduxSteps: GuideStep[] = [
  {
    title: "Install Redux Toolkit + React bindings",
    description:
      "Redux Toolkit removes the boilerplate from Redux and the Provider wiring lets any component access the store.",
    fileName: "terminal",
    language: "bash",
    code: ["npm install @reduxjs/toolkit react-redux"].join("\n"),
  },
  {
    title: "Describe your state & reducers in a slice",
    description:
      "Slices hold the state shape, the reducer logic, and auto-generate the action creators we dispatch from components.",
    fileName: "src/features/counterSlice.ts",
    language: "ts",
    code: [
      'import { createSlice, PayloadAction } from "@reduxjs/toolkit";',
      "",
      "type CounterState = {",
      "  value: number;",
      "};",
      "",
      "const initialState: CounterState = { value: 0 };",
      "",
      "const counterSlice = createSlice({",
      '  name: "counter",',
      "  initialState,",
      "  reducers: {",
      "    increment(state) {",
      "      state.value += 1;",
      "    },",
      "    decrement(state) {",
      "      state.value -= 1;",
      "    },",
      "    incrementBy(state, action: PayloadAction<number>) {",
      "      state.value += action.payload;",
      "    },",
      "  },",
      "});",
      "",
      "export const { increment, decrement, incrementBy } = counterSlice.actions;",
      "export default counterSlice.reducer;",
    ].join("\n"),
  },
  {
    title: "Configure a store once",
    description:
      "Redux Toolkit’s configureStore wires DevTools, middleware, and your reducers with TypeScript helpers for free.",
    fileName: "src/store/store.ts",
    language: "ts",
    code: [
      'import { configureStore } from "@reduxjs/toolkit";',
      'import counterReducer from "../features/counterSlice";',
      "",
      "export const store = configureStore({",
      "  reducer: {",
      "    counter: counterReducer,",
      "  },",
      "});",
      "",
      "export type RootState = ReturnType<typeof store.getState>;",
      "export type AppDispatch = typeof store.dispatch;",
    ].join("\n"),
  },
  {
    title: "Provide the store to React",
    description:
      "Wrap the root with the Redux <Provider>. From now on any component can call useDispatch/useSelector.",
    fileName: "src/main.tsx",
    language: "tsx",
    code: [
      'import React from "react";',
      'import ReactDOM from "react-dom/client";',
      'import { Provider } from "react-redux";',
      'import App from "./App";',
      'import { store } from "./store/store";',
      "",
      'ReactDOM.createRoot(document.getElementById("root")!).render(',
      "  <React.StrictMode>",
      "    <Provider store={store}>",
      "      <App />",
      "    </Provider>",
      "  </React.StrictMode>",
      ");",
    ].join("\n"),
  },
  {
    title: "Read + mutate state inside components",
    description:
      "useSelector pulls the data you need, and useDispatch fires the reducers you defined inside the slice.",
    fileName: "src/components/Counter.tsx",
    language: "tsx",
    code: [
      'import { useDispatch, useSelector } from "react-redux";',
      'import { decrement, increment } from "../features/counterSlice";',
      'import type { AppDispatch, RootState } from "../store/store";',
      "",
      "const Counter = () => {",
      "  const count = useSelector((state: RootState) => state.counter.value);",
      "  const dispatch = useDispatch<AppDispatch>();",
      "",
      "  return (",
      '    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">',
      '      <button className="btn" onClick={() => dispatch(decrement())}>',
      "        -",
      "      </button>",
      '      <span className="text-2xl font-semibold">{count}</span>',
      '      <button className="btn" onClick={() => dispatch(increment())}>',
      "        +",
      "      </button>",
      "    </div>",
      "  );",
      "};",
      "",
      "export default Counter;",
    ].join("\n"),
  },
];

const Redux: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 overflow-y-auto px-2 py-2 sm:px-0">
      <BreadCrumb breadCrumb={breadCrumb} />
      <p className="text-sm text-slate-600">
        Redux Toolkit shines when an app grows past simple local state. Follow
        the file tree, then walk through each step below to wire a predictable,
        time-travel friendly global store.
      </p>

      <div className="w-full overflow-x-auto" aria-label="Suggested folder structure">
        <TreeStructure
          rootFolder="src"
          files={[
            "features/counterSlice.ts",
            "store/store.ts",
            "components/Counter.tsx",
            "App.tsx",
            "main.tsx",
          ]}
        />
      </div>

      <div className="flex flex-col gap-4 ">
        {reduxSteps.map((step, index) => (
          <section
            key={step.title}
            className="rounded-2xl border border-amber-200 bg-white p-3 shadow-sm sm:p-4"
          >
            <div className="mb-3 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-amber-500">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
            <CodeBlock
              code={step.code}
              fileName={step.fileName}
              language={step.language}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Redux;
