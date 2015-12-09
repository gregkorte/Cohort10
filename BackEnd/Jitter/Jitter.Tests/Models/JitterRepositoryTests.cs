using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jitter.Models;
using System.Collections.Generic;
using Moq;
using System.Data.Entity;
using System.Linq;

namespace Jitter.Tests.Models
{
    [TestClass]
    public class JitterRepositoryTests
    {
        private Mock<JitterContext> mock_context;
        private Mock<DbSet<JitterUser>> mock_set;
        private JitterRepository repository;

        private void ConnectMocksToDataStore(IEnumerable<JitterUser> data_store)
        {
            var data_source = data_store.AsQueryable<JitterUser>();
            // HINT HINT: var data_source = (data_store as IEnumerable<JitterUser>).AsQueryable();
            // Convince LINQ that our Mock DbSet is a (relational) Data store.

            mock_set.As<IQueryable<JitterUser>>().Setup(data => data.Provider).Returns(data_source.Provider);

            mock_set.As<IQueryable<JitterUser>>().Setup(data => data.Expression).Returns(data_source.Expression);

            mock_set.As<IQueryable<JitterUser>>().Setup(data => data.ElementType).Returns(data_source.ElementType);

            mock_set.As<IQueryable<JitterUser>>().Setup(data => data.GetEnumerator()).Returns(data_source.GetEnumerator());

            // This is stubbing the JitterUsers property getter

            mock_context.Setup(a => a.JitterUsers).Returns(mock_set.Object);
        }

        [TestInitialize]
        public void Initialize()
        {
            mock_context = new Mock<JitterContext>();
            mock_set = new Mock<DbSet<JitterUser>>();
            repository = new JitterRepository(mock_context.Object);
        }

        [TestCleanup]
        public void CleanUp()
        {
            mock_context = null;
            mock_set = null;
            repository = null;
        }

        [TestMethod]
        public void JitterContextEnsureICanCreateInstance()
        {
            JitterContext context = mock_context.Object;
            Assert.IsNotNull(context);
        }

        [TestMethod]
        public void JitterRepositoryEnsureICanCreateInstance()
        {
            Assert.IsNotNull(repository);
        }

        [TestMethod]
        public void JitterRepositoryEnsureICanGetAllUsers()
        {
            // Arrange
            var expected = new List<JitterUser>
            {
                new JitterUser { Handle = "solo1" },
                new JitterUser { Handle = "chewie1" }
            };

            mock_set.Object.AddRange(expected);

            ConnectMocksToDataStore(expected);

            //Act
            var actual = repository.GetAllUsers();

            //Assert
            Assert.AreEqual("solo1", actual.First().Handle);

            CollectionAssert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void JitterRepositoryEnsureIHaveAContext()
        {
            // Arrange
            

            // Act
            var actual = repository.Context;

            // Assert
            Assert.IsInstanceOfType(actual, typeof(JitterContext));
        }
    }
}
