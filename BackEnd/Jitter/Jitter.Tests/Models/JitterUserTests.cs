using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Jitter.Models;
using System.Collections.Generic;

namespace Jitter.Tests.Models
{
    [TestClass]
    public class JitterUserTests
    {
        [TestMethod]
        public void JitterUserEnsureICanCreateInstance()
        {
            JitterUser a_user = new JitterUser();
            Assert.IsNotNull(a_user);
        }

        [TestMethod]
        public void JitterUserEnsureJitterUserHasAllTheThings()
        {
            // Arrange
            JitterUser a_user = new JitterUser();
            a_user.Handle = "solo1";
            a_user.FirstName = "Han";
            a_user.LastName = "Solo";
            a_user.Picture = "https://google.com";
            a_user.Description = "You've never heard of the Millennium Falcon? It's the ship that made the Kessel Run in less than twelve parsecs.";

            // Act

            // Assert
            Assert.AreEqual("solo1", a_user.Handle);
            Assert.AreEqual("Han", a_user.FirstName);
            Assert.AreEqual("Solo", a_user.LastName);
            Assert.AreEqual("https://google.com", a_user.Picture);
            Assert.AreEqual("You've never heard of the Millennium Falcon? It's the ship that made the Kessel Run in less than twelve parsecs.", a_user.Description);
        }

        [TestMethod]
        public void JitterUserEnsureHasJots()
        {
            // Arrange
            List<Jot> list_of_jots = new List<Jot>
            {
                new Jot { Content = "blah!" },
                new Jot { Content = "blah, part 2!" }
            };
            JitterUser a_user = new JitterUser { Handle = "solo1", Jots = list_of_jots };

            // Act
            List<Jot> actual_jots = a_user.Jots;

            // Assert
            CollectionAssert.AreEqual(list_of_jots, actual_jots);
        }

        [TestMethod]
        public void JitterUserEnsureHasFollowsOthers()
        {
            // Arrange
            List<JitterUser> list_of_users = new List<JitterUser>
            {
                new JitterUser { Handle = "blah!" },
                new JitterUser { Handle = "blah2" }
            };
            JitterUser a_user = new JitterUser { Handle = "solo1", Following = list_of_users };

            // Act
            List<JitterUser> actual_users = a_user.Following;

            // Assert
            CollectionAssert.AreEqual(list_of_users, actual_users);
        }
    }
}
