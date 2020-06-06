import React from "react"
import {
  Code,
  Section,
  FunctionRef,
  ActionRef,
  ObjectRef,
  CString,
  searchable,
} from "components"

export default function Guide() {
  return (
    <Section id="guide" title="Guide" style={{ scrollMarginTop: "6rem" }}>
      <Section.P>
        To use Fluor.js effectively, there are a few key concepts to grasp. Once
        that is done, you will be able to do simple things with very little
        amount of code.
      </Section.P>

      <Section.Heading
        id="guide-molecules"
        style={{ scrollMarginTop: "6rem" }}
        {...searchable({
          category: "guide",
          name: "Molecules",
          link: "#guide-molecules",
          type: "",
          shortDescription: "What is a Fluor Molecule?",
        })}
      >
        Molecules
      </Section.Heading>

      <Section.P>
        One key concept that you will encounter a lot in Fluor is a{" "}
        <em>molecule</em>. A molecule is an object that is created when you put
        a <Code language="html">{`<script type="fluor"></script>`}</Code> inside
        an HTML element as shown in the{" "}
        <a href="#guide-quickstart">Quickstart</a>.
      </Section.P>

      <Section.P>
        The created molecule creates an execution context for your Fluor code,
        it also registers the root HTML element as the molecule&apos;s{" "}
        <ObjectRef member="$root" />. All HTML selectors that you will use with{" "}
        <FunctionRef member="$" /> and <FunctionRef member="$$" /> will be
        scoped to that root element as well unless you manually specify a
        different root.
      </Section.P>

      <Section.P>
        You can also nest molecules and in that case you can use{" "}
        <ObjectRef member="$parent" /> to refer to the parent molecule.
      </Section.P>

      <Section.Heading
        id="guide-variables"
        style={{ scrollMarginTop: "6rem" }}
        {...searchable({
          category: "guide",
          name: "Variables",
          link: "#guide-variables",
          type: "",
          shortDescription: "Learn how to use variables.",
        })}
      >
        Variables
      </Section.Heading>

      <Section.P>
        Variables are defined using the <FunctionRef member="setup" /> function
        and updated with the <ActionRef member="set" /> action. They can hold
        any type of JavaScript value: strings, numbers, arrays, objects and
        functions.
      </Section.P>

      <Section.P>
        You can use variables in your Fluor scripts or in your HTML through the
        use of special <em>directives</em> that we will cover in the next
        section.
      </Section.P>

      <Section.P>
        All the variables are internally stored in an object which you can
        access using the special <ObjectRef member="$data" /> variable.
      </Section.P>

      <Section.P>
        Everytime you can write a variable name you can also use a dotted path
        to access nested objects. For example, if you have a variable{" "}
        <CString>user</CString> that contains an object{" "}
        <Code>{`{avatar: {url: "http://example.com/avatar.png"}}`}</Code> you
        can access the <CString>url</CString> part using{" "}
        <CString>user.avatar.url</CString>.
      </Section.P>

      <Section.Heading
        id="guide-directives"
        style={{ scrollMarginTop: "6rem" }}
        {...searchable({
          category: "guide",
          name: "Directives",
          link: "#guide-directives",
          type: "",
          shortDescription: "Make your HTML dynamic with directives.",
        })}
      >
        Directives
      </Section.Heading>

      <Section.P>
        Directives are special HTML attributes that you can use to tie your
        Fluor code to your DOM. You can use them to print value of variables,
        conditionally show parts of your HTML and a lot of other things.
      </Section.P>

      <Section.P>
        All Fluor directives start with <Code>f-</Code>. Because of the way HTML
        works, you cannot specify the same directive more than once (but you
        shouldn&apos;t have to anyway).
      </Section.P>

      <Section.P>
        For a detailed documentation of each directive, please refer to the{" "}
        <a href="#directives">Directives API</a>.
      </Section.P>

      <Section.Heading
        id="guide-actions"
        style={{ scrollMarginTop: "6rem" }}
        {...searchable({
          category: "guide",
          name: "Actions",
          link: "#guide-actions",
          type: "",
          shortDescription: "Handle events with actions.",
        })}
      >
        Actions
      </Section.Heading>

      <Section.P>
        Most of your work when using Fluor.js is reacting to events that come
        from your DOM elements. To avoid the need to create event handlers, the
        Fluor language provides a set of predefined functions that create those
        handlers for you.
      </Section.P>

      <Section.P>
        Throughout this documentation you will often encounter the term{" "}
        <em>action</em> which is simply a way to tell that these special
        functions that return functions that can be used as event handlers when
        using <FunctionRef member="on" />.
      </Section.P>

      <Section.P>
        The most common action you will likely use is <ActionRef member="set" />{" "}
        which is used to update variables as a reaction to an event.
      </Section.P>

      <Section.P>
        You can obviously create your own actions too, it&apos;s just JavaScript
        in the end!
      </Section.P>
    </Section>
  )
}
