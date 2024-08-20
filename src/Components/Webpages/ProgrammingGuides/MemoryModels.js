import React from 'react';
import '../Webpages.css';

function MemoryModels() {
    return (
        <div className='PageContainer'>
            <h1>C++ Memory Models</h1>
            <p>
                C++ STL Atomics have different memory models that affect the efficiency and execution 
                of a program. In a way, the memory models define when results of atomic operations become
                visible to other threads. Different models have differing amounts of computing and cache overhead which 
                can substantially, affect the correctness and performance of a program. In this guide, I will quickly 
                cover the 4 types of memory models in C++ STL Atomics: Sequential and Consistent, Release/Acquire,
                Consume, Relaxed. 
                <br />
                <br />
                I took inspiration from the GNU GCC reference page on memory models, which can be found <a href="https://gcc.gnu.org/wiki/Atomic/GCCMM/AtomicSync">here.</a>
            </p>
            <br />
            <br />
            <div>
                <h2>
                    Sequential and Consistent
                </h2>
                <p>
                    Sequential and Consistent is the default memory model used by STL Atomics. Among all the other memory models,
                    Seq. Cst. has the most definitive behavior. It defines a strict order execution for atomic operations.
                    This order of execution is seen by all threads, creating a "happens-before" relationship. Suppose we have atomic
                    operation A and B, and the operation of A occurs before B. In a Seq. Cst memory model, if any thread sees the atomic operation of B,
                    then the thread is guaranteed to see the atomic operation of A. This is because operation A and B have a relationship
                    "A happens-before B." However, if a thread only sees atomic operation A, the thread is not guaranteed to see 
                    the atomic operation of B because the relationship "B happens-before A" is not true.
                    <br /><br />
                    Seq. Cst. is the most expensive memory model in terms of computing and cache overhead. Because of the strict ordering
                    of operations, the code can not be reordered/optimized as much as other memory models. The CPU pipelines generally allow parallel
                    execution if instructions do not have data dependencies. The strict ordering of operations in Seq. Cst.
                    forces programs to wait for the completion of previous operations before starting the next operation leading to a 
                    decrease in performance. Suppose we have the same example as above where atomic operation A occurs before B. Since there is 
                    an ordering of atomic operations, the compiler must ensure that the operation of A is completed before starting 
                    the operation of B (No parallel operations). However, this gives very definitive behavior and is less prone to errors.
                    <br /><br />
                    Seq. Cst. also has significant cache overhead. Because threads must see the same results of atomic operations, the cache
                    must be flushed and updated to ensure that all threads see the same results. This leads to cache misses and 
                    cache synchronization overhead.
                    <br /><br />
                    <h4>Programming Seq. Cst.</h4>
                    <p>
                        Defined as <code>std::memory_order_seq_cst</code>. <br /> <br />
                        When calling load, store, or exchange methods, the memory order is usually the last parameter passed in. <br /> <br />
                        <code>atomic.load(std::memory_order_seq_cst)</code> <br />
                        <code>atomic.store(10, std::memory_order_seq_cst)</code> <br />
                        <code>atomic.exchange(20, std::memory_order_seq_cst)</code> <br />
                    </p>
                </p>
            </div>
            <br /> <br />
            <div>
                <h2>
                    Relaxed
                </h2>
                <p>
                    Relaxed is the most unrestrictive memory model, and thus, has the least amount of overhead compared
                    to all other models. There is no defined order (no "Happens-Before" relationship) of execution for 
                    relaxed atomic operations. The only guarantee provided by the model is that no earlier states of the atomic
                    variable can be seen once a more recent state is observed.
                    <br /><br />
                    In terms of efficiency, relaxed operations can be reordered and optimized by the compiler due to the absence of
                    strict ordering. While the model is not ideal for all scenarios, it is very useful when a change should be seen evenutally.
                    I have personally used this model when programming a flag to terminate a thread. In this case, it was not necessary for
                    the thread to quit immediately. Instead, the thread would see the update after a few milliseconds and quit. 
                    My use is similar to the concept of stop-tokens in C++20.
                    <br /><br />
                    <h4>Programming Relaxed</h4>
                    Defined as <code>std::memory_order_relaxed</code>. <br /> <br />
                    Ex. <br />
                    <code>atomic.load(std::memory_order_relaxed)</code> <br />
                    <code>atomic.store(10, std::memory_order_relaxed)</code> <br />
                    <code>atomic.exchange(20, std::memory_order_relaxed)</code> <br />
                </p>
            </div>
            <br /><br />
            <div>
                <h2>
                    Acquire and Release
                </h2>
                <p>
                    The acquire and release model is somewhat similar to the sequential and consistent model. Suppose thread 1
                    executes multiple store and load operation before a store/load to atomic variable X using the acquire/release mdoel. 
                    If thread 2 sees the updated value of X, then thread 2 is guaranteed to see the results of all store/load operations
                    preceeding the operation on X by thread 1. However, if thread 2 does not see the updated value of X, then thread 2 
                    arbitrarily sees the results of the store/load operations preceeding the operation on X by thread 1.
                    <br /><br />
                    Unlike sequential and consistent, operations are not ordered across all threads. Instead, each thread has its own
                    ordering of operations. For example, suppose thread 1 makes a store operation to X and thread 2 makes a store operation
                    to Y using the acquire/release model. Then, thread 3 can potentially see the updated value of X but not Y while at the
                    same time thread 4 can potentially see the updated value of Y but not X. In the sequential and consistent model, 
                    this is impossible because a strict ordering of operations is enforced across all threads. In The sequential and 
                    consistent model, the store to X must have occurred before the store to Y, or vice versa. Therefore, if thread 3 
                    sees the updated value of X and thread 4 sees the update to Y, if X happened before Y, thread 4 MUST see the update to X.
                    <br /><br />
                    As illustrated, the acquire and release model does not support a process-wide ordering of atomic operations. However, 
                    operations within a single thread are ordered. As a result, this model is much less computationally expensive. 
                    <br /><br />
                    From cppreference's memory models page, acquire prevents the reordering of store/read instructions before the
                    memory_order_acquire operation. In addition, release prevents the reordering of read/store instructions after the
                    call to memory_order_release operation.
                    <br /><br />
                    <h4>Programming Acquire/Release</h4>
                    Defined as: <br /> 
                    <code>std::memory_order_acquire</code> <br />
                    <code>std::memory_order_release</code> <br /> <br />
                    Ex. <br />
                    <code>atomic.load(std::memory_order_acquire)</code> <br />
                    <code>atomic.store(10, std::memory_order_release)</code> <br />
                    <code>atomic.exchange(20, std::memory_order_acquire)</code> <br /> <br />
                    Note: load is always a memory order acquire and store is always a memory order release. <br /> <br />
                    
                </p>
            </div>
            <br /><br />
            <div>
                <h2>
                    Consume
                </h2>
                <p>
                    Memory order consume further reduces the strict contrainsts of the acquire/release model. 
                    The consume model essentially removes synchronization between non-dependent variables.
                    Given the following sequence of operations: <br />
                    <code>
                        x = 10; <br />
                        y = 0; <br />
                        g = atomic.store(x, std::memory_order_consume); <br />
                    </code>
                    The only dependencies in this sequence of operation is the store operations of x and g. As a result, if the 
                    updated value of g is seen in a different thread, the updated value of x must also be seen. However,
                    there is no guarantee that the updated value of y will be seen if the updated value of g is seen.
                    <br /><br />
                    <h4>Programming Consume</h4>
                    Defined as: <br /> 
                    <code>std::memory_order_consume</code> <br /> <br />
                    Ex. <br />
                    <code>atomic.load(std::memory_order_consume)</code> <br />
                    <code>atomic.store(10, std::memory_order_consume)</code> <br />
                    <code>atomic.exchange(20, std::memory_order_consume)</code> <br /> <br />
                </p>
            </div>
        </div>
    );
}

export default MemoryModels;