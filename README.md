# Issue of self-referential type in gen-flow-files command

## Problem

Union type with self-referential can't be generated using `gen-flow-files`. For example, the following case.

```javascript
export type Foo = number | Foo[];

const num: Foo = 1;
const ary: Foo = [1, 2];
```

## Environment

- flow-bin: 0.86.0
- Node.js: 10.11.0
- OS: macOS 10.13.6

## Preparation

```
npm install
```

## Test

```
npm test

> issue-of-self-reference-type@1.0.0 test /Users/nobyu/git/issue-of-self-reference-type
> npx mocha tests/**



  index.js
    ✓ check (1381ms)
    1) gen-flow-files


  1 passing (9s)
  1 failing

  1) index.js
       gen-flow-files:
     Error: Command failed: npx flow gen-flow-files ./fixtures/input.js
Launching Flow server for /Users/nobyu/git/issue-of-self-reference-type
Spawned flow server (pid=57050)
Logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.log
Monitor logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.monitor_log
Started a new flow server: -Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is initializing (starting up)
Please wait. Server is initializing (parsed files 0)
Please wait. Server is initializing (parsed files 154)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (parsed files 0/0 (0.0%))
Please wait. Server is initializing (calculating dependencies)
Please wait. Server is initializing (merged files 0/4 (0.0%))
Please wait. Server is initializing (finishing up)
Lost connection to the flow server (3 retries remaining)
The flow server is not responding (3 retries remaining): \Launching Flow server for /Users/nobyu/git/issue-of-self-reference-type
Spawned flow server (pid=57091)
Logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.log
Monitor logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.monitor_log
Started a new flow server: |Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is initializing (starting up)
Please wait. Server is initializing (parsed files 0)
Please wait. Server is initializing (parsed files 154)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (parsed files 0/0 (0.0%))
Please wait. Server is initializing (calculating dependencies)
Please wait. Server is initializing (merged files 0/4 (0.0%))
Please wait. Server is initializing (finishing up)
Please wait. Server is handling a request (starting up)
Lost connection to the flow server (2 retries remaining)
The flow server is not responding (3 retries remaining): /Launching Flow server for /Users/nobyu/git/issue-of-self-reference-type
Spawned flow server (pid=57130)
Logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.log
Monitor logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.monitor_log
Started a new flow server: -Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is initializing (starting up)
Please wait. Server is initializing (parsed files 0)
Please wait. Server is initializing (parsed files 154)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (parsed files 0/0 (0.0%))
Please wait. Server is initializing (calculating dependencies)
Please wait. Server is initializing (merged files 0/4 (0.0%))
Please wait. Server is initializing (finishing up)
Lost connection to the flow server (1 retry remaining)
The flow server is not responding (3 retries remaining): \Launching Flow server for /Users/nobyu/git/issue-of-self-reference-type
Spawned flow server (pid=57169)
Logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.log
Monitor logs will go to /private/tmp/flow/zSUserszSnobyuzSgitzSissue-of-self-reference-type.monitor_log
Started a new flow server: |Please wait. Server is starting up
Please wait. Server is starting up
Please wait. Server is initializing (starting up)
Please wait. Server is initializing (parsed files 0)
Please wait. Server is initializing (parsed files 154)
Please wait. Server is initializing (resolving dependencies)
Please wait. Server is initializing (parsed files 0/0 (0.0%))
Please wait. Server is initializing (calculating dependencies)
Please wait. Server is initializing (merged files 0/4 (0.0%))
Please wait. Server is initializing (finishing up)
Please wait. Server is handling a request (collating errors)
Lost connection to the flow server (0 retries remaining)
Out of retries, exiting!

      at checkExecSyncError (child_process.js:611:11)
      at execSync (child_process.js:648:13)
      at Context.<anonymous> (tests/index.js:13:19)
```
