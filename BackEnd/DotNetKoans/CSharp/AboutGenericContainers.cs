using System;
using System.Collections.Generic;
using Xunit;
using System.Collections;

namespace DotNetKoans.CSharp
{
	public class AboutGenericContainers : Koan
	{
		[Koan(1)]
		public void ArrayListSizeIsDynamic()
		{
			//When you worked with Array, the fact that Array is fixed size was glossed over.
			//The size of an array cannot be changed after you allocate it. To get around that
			//you need a class from the System.Collections namespace such as ArrayList
			ArrayList list = new ArrayList();
			Assert.Equal(0, list.Count);

			list.Add(42);
			Assert.Equal(1, list.Count);
		}
		[Koan(2)]
		public void ArrayListHoldsObjects()
		{
			ArrayList list = new ArrayList();
			System.Reflection.MethodInfo method = list.GetType().GetMethod("Add");
			Assert.Equal(typeof(Object), method.GetParameters()[0].ParameterType);
		}
		[Koan(3)]
		public void MustCastWhenRetrieving()
		{
			//There are a few problems with ArrayList holding object references. The first 
			//is that you must cast the items you fetch back to the original type.
			ArrayList list = new ArrayList();
			list.Add(42);
			int x = 0;
			//x = (int)list[0];
			Assert.Equal(list[0], 42);
		}
		[Koan(4)]
		public void ArrayListIsNotStronglyTyped()
		{
			//Having to cast everywhere is tedious. But there is also another issue lurking
			//ArrayList can hold more than one type. 
			ArrayList list = new ArrayList();
			list.Add(42);
			list.Add("fourty two");
			Assert.Equal(42, list[0]);
            Assert.Equal("fourty two", list[1]);

			//While there are a few cases where it could be nice, instead what it means is that 
			//anytime your code works with an array list you have to check that the element is 
			//of the type you expect.
		}
		[Koan(5)]
		public void Boxing()
		{
			short s = 5;
			object os = s;
			Assert.Equal(s.GetType(), os.GetType());
			Assert.Equal(s, os);

			//While this it is true that everything is an object and all the above passes. Not everything is quite as it seems.
			//Under the covers .Net allocates memory for all value type objects (int, double, bool,...) on the stack. This is 
			//considerably more efficient than a heap allocation. .Net also has the ability to put a value type onto the heap.
			//(for calling methods and other reasons). The process of putting stack data into the heap is called "boxing" the 
			//process of taking the value type off the heap is called "unboxing". We won't go into the details (see Jeffrey 
			//Richter's book if you want details). This subject comes up because every time you put a value type into an 
			//ArrayList it must be boxed. Every time you read it from the ArrayList it must be unboxed. This can be a significat
			//cost.
		}
		[Koan(6)]
		public void ABetterDynamicSizeContainer()
		{
			//ArrayList is a .Net 1.0 container. With .Net 2.0 generics were introduced and with it a new set of collections in
			//System.Collections.Generic The array like container is List<T>. List<T> (read "list of T") is a generic class. 
			//The "T" in the definition of List<T> is the type argument. You cannot declare an instace of List<T> without also
			//supplying a type in place of T.
			var list = new List<int>();
			Assert.Equal(0, list.Count);

			list.Add(42);
			Assert.Equal(1, list.Count);

			//Now just like int[], you can have a type safe dynamic sized container
			//list.Add("fourty two"); //<--Unlike ArrayList this is illegal.
			
			//List<T> also solves the boxing/unboxing issues of ArrayList. Unfortunately, you'll have to take Microsoft's word for it
			//as I can't find a way to prove it without some ugly MSIL beyond the scope of these Koans.
		}
		public class Widget
		{
		}
		[Koan(7)]
		public void ListWorksWithAnyType()
		{
			//Just as with Array, list will work with any type
			List<Widget> list = new List<Widget>();
			list.Add(new Widget());
			Assert.Equal(1, list.Count);
		}
		[Koan(8)]
		public void InitializingWithValues()
		{
			//Like array you can create a list with an initial set of values easily
			var list = new List<int> { 1, 2, 3 };
			Assert.Equal(3, list.Count);
		}
		[Koan(9)]
		public void AddMultipleItems()
		{
			//You can add multiple items to a list at once
			List<int> list = new List<int>();
			list.AddRange(new[] { 1, 2, 3 });
			Assert.Equal(3, list.Count);
		}
		[Koan(10)]
		public void RandomAccess()
		{
			//Just as with array, you can use the subscript notation to access any element in a list.
			List<int> list = new List<int> { 5, 6, 7 };
			Assert.Equal(7, list[2]);
		}
		[Koan(11)]
		public void BeyondTheLimits()
		{
			List<int> list = new List<int> { 1, 2, 3 };
			//You cannot attempt to get data that doesn't exist
			Assert.Throws(typeof(System.ArgumentOutOfRangeException), delegate() { int x = list[3]; });
		}
		[Koan(12)]
		public void ConvertingToFixedSize()
		{
			List<int> list = new List<int> { 1, 2, 3 };
			Assert.Equal(new[] { 1, 2, 3 }, list.ToArray());
		}
		[Koan(13)]
		public void InsertingInTheMiddle()
		{
			List<int> list = new List<int> { 1, 2, 3 };
			list.Insert(1, 6);
			Assert.Equal(new[] { 1, 6, 2, 3 }, list.ToArray());
		}
		[Koan(14)]
		public void RemovingItems()
		{
			List<int> list = new List<int> { 2, 1, 2, 3 };
			list.Remove(2);
			Assert.Equal(new[] { 1, 2, 3 }, list.ToArray());
		}
		[Koan(15)]
		public void StackPushPop()
		{
			var stack = new Stack<int>();
			Assert.Equal(0, stack.Count);

			stack.Push(42);
			Assert.Equal(1, stack.Count);

			int x = stack.Pop();
			Assert.Equal(42, x);

			Assert.Equal(0, stack.Count);
		}
		[Koan(16)]
		public void StackOrder()
		{
			var stack = new Stack<int>();
			stack.Push(1);
			stack.Push(2);
			stack.Push(3);

			Assert.Equal(new[] { 3, 2, 1 }, stack.ToArray());
		}
		[Koan(17)]
		public void PeekingIntoAQueue()
		{
			Queue<string> queue = new Queue<string>();
			queue.Enqueue("one");
			Assert.Equal("one", queue.Peek());
			queue.Enqueue("two");
			Assert.Equal("one", queue.Peek());
		}
		[Koan(18)]
		public void RemovingItemsFromTheQueue()
		{
			Queue<string> queue = new Queue<string>();
			queue.Enqueue("one");
			queue.Enqueue("two");
			Assert.Equal("one", queue.Dequeue());
			Assert.Equal(1, queue.Count);
		}
		[Koan(19)]
		public void AddingToADictionary()
		{
			//Dictionary<TKey, TValue> is .Net's key value store. The key and the value do not need to be the same types.
			Dictionary<int, string> dictionary = new Dictionary<int, string>();
			Assert.Equal(0, dictionary.Count);
			dictionary[1] = "one";
			Assert.Equal(1, dictionary.Count);
		}
		[Koan(20)]
		public void AccessingData()
		{
			Dictionary<string,string> dictionary = new Dictionary<string,string>();
			dictionary["one"] = "uno";
			dictionary["two"] = "dos";
			//The most common way to locate data is with the subscript notation.
			Assert.Equal("uno", dictionary["one"]);
			Assert.Equal("dos", dictionary["two"]);
		}
		[Koan(21)]
		public void AccessingDataNotAdded()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			Assert.Throws(typeof(System.Collections.Generic.KeyNotFoundException), delegate() { string s = dictionary["two"]; });
		}
		[Koan(22)]
		public void CatchingMissingData()
		{
			//To deal with the throw when data is not there, you could wrap the data access in a try/catch block...
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			string result;
			try
			{
				result = dictionary["two"];
			}
			catch (Exception ex)
			{
				result = "dos";
			}
			Assert.Equal("dos", result);
		}
		[Koan(23)]
		public void PreCheckForMissingData()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			string result;
			if (dictionary.ContainsKey("two"))
			{
				result = dictionary["two"];
			}
			else
			{
				result = "dos";
			}
			Assert.Equal("dos", result);
		}
		[Koan(24)]
		public void TryGetValueForMissingData()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			string result;
			if (!dictionary.TryGetValue("two", out result))
			{
				result = "dos";
			}
			Assert.Equal("dos", result);
		}
		[Koan(25)]
		public void InitializingADictionary()
		{
			//Although it is not common, you can initialize a dictionary...
			var dictionary = new Dictionary<string, string> { { "one", "uno" }, { "two", "dos" } };
			Assert.Equal("uno", dictionary["one"]);
			Assert.Equal("dos", dictionary["two"]);
		}
		[Koan(26)]
		public void ModifyingData()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			dictionary["two"] = "dos";
			dictionary["one"] = "ein";
			Assert.Equal("ein", dictionary["one"]);
		}
		[Koan(27)]
		public void KeyExists()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			Assert.Equal(true, dictionary.ContainsKey("one"));
			Assert.Equal(false, dictionary.ContainsKey("two"));
		}
		[Koan(28)]
		public void ValueExists()
		{
			Dictionary<string, string> dictionary = new Dictionary<string, string>();
			dictionary["one"] = "uno";
			Assert.Equal(true, dictionary.ContainsValue("uno"));
			Assert.Equal(false, dictionary.ContainsValue("dos"));
		}
		[Koan(29)]
		public void f()
		{
			Dictionary<string, int> one = new Dictionary<string, int>();
			one["jim"] = 53;
			one["amy"] = 20;
			one["dan"] = 23;

			Dictionary<string, int> two = new Dictionary<string, int>();
			two["jim"] = 54;
			two["jenny"] = 26;

			foreach (KeyValuePair<string, int> item in two)
			{
				one[item.Key] = item.Value;
			}

			Assert.Equal(54, one["jim"]);
			Assert.Equal(26, one["jenny"]);
			Assert.Equal(20, one["amy"]);
		}
	}
}
