# NODE.JS

## Introduction

### * it allows to build scalable network applications using javascript on the server-side.

### * it runs on top of the VB javascript runtime(same that is run on the browser).

## What can we build using nodejs?
### *Web socket server*
### *File upload client*
### *Ad server*
### *Real-time data apps*

## Misconceptions
 # *- Node.js is not a web framework*
 # *- Node.js is not multi-threaded*

## The event loop
 *- The first time node interprets the js code and executes it, it registers the events it finds*
 *- Once the script has been executed, node starts the event loop, which checks for events continuously*
 *- Once node finds a new event, it will trigger the callback associated with such event*
 *- Allows us to write code that is non-blocking*

## The event Queue
 #### - Queues the events for the event loop
 #### - Processes the events, one at a time
