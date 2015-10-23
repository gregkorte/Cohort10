using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Mathmagician;

namespace Mathmagician_Testing
{
    [TestClass]
    public class EvenTests
    {
        [TestMethod]
        public void EnsureICanCreateClassInstance()
        {
            EvenNumbers even = new EvenNumbers();
        }
    }
}
