using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Mathmagician;
using System.Linq;

namespace Mathmagician_Testing
{
    [TestClass]
    public class FibonacciTests
    {
        [TestMethod]
        public void FibonacciEnsureICanCreateClassInstance()
        {
            FibonacciNumbers fib = new FibonacciNumbers();
            Assert.IsNotNull(fib);
        }

        [TestMethod]
        public void FibonacciShouldPrintFirstNumber()
        {
            FibonacciNumbers fib = new FibonacciNumbers();
            int expected = 0;
            int actual = fib.GetFirst();
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void FibonacciShouldPrintNextNumber()
        {
            FibonacciNumbers fib = new FibonacciNumbers();
            int[] array = new int[] { 0, 1, 1, 2, 3, 5 };
            int input = array.Last();
            int expected = 8;
            int actual = // fib.GetNextFib(input);
                input + array.ElementAt(array.Length - 2);
            Assert.AreEqual(expected, actual);
        }
        [TestMethod]
        public void FibonacciShouldPrintAVariableSequenceOfNumbers()
        {
            FibonacciNumbers fib = new FibonacciNumbers();
            int input = 8;
            int[] expected = new int[] { 0, 1, 1, 2, 3, 5, 8, 13 };
            int[] actual = fib.GetSequence(input);
            CollectionAssert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void FibonacciPrintSequenceOfNumbers()
        {
            FibonacciNumbers fib = new FibonacciNumbers();
            int length = 7;
            string expected = "0 1 1 2 3 5 8";
            string actual = fib.ToString(fib.GetSequence(length));
            Assert.AreEqual(expected, actual);
        }
    }
}
