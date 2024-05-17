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
            <p>
                Memory order relaxed, acquire/release, and consume in the works :)
            </p>
        </div>
    );
}

export default MemoryModels;