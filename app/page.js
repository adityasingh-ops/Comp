"use client";
import React, { useState, useEffect } from 'react';
import { Trophy, Flame, Target, CheckCircle2, Code2, Users, Award, TrendingUp, Calendar, Clock, Zap, Star, ExternalLink, BarChart3, Filter, Search, ChevronDown, ChevronRight, Medal, Crown, Activity, Rocket, Brain, LogOut, User, UserCircle, Github, Linkedin, Mail, Globe, MessageSquare, Bot, Cat, Dog, Bird, Fish, Squirrel, Rabbit, Turtle, Sparkles, Heart, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://eynyndvtuilnwdikefvl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bnluZHZ0dWlsbndkaWtlZnZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3MTczOTQsImV4cCI6MjA3NTI5MzM5NH0.J9I_ZinrOFOSYiz-bGvDogq40C0jn5i2VCFl_YMz8R0';
const supabase = createClient(supabaseUrl, supabaseKey);

// Avatar options
const avatarIcons = [
  { id: 'user', icon: User, color: 'from-blue-500 to-cyan-500' },
  { id: 'bot', icon: Bot, color: 'from-purple-500 to-pink-500' },
  { id: 'rocket', icon: Rocket, color: 'from-orange-500 to-red-500' },
  { id: 'cat', icon: Cat, color: 'from-yellow-500 to-orange-500' },
  { id: 'dog', icon: Dog, color: 'from-brown-500 to-orange-700' },
  { id: 'bird', icon: Bird, color: 'from-sky-400 to-blue-600' },
  { id: 'fish', icon: Fish, color: 'from-cyan-400 to-teal-600' },
  { id: 'squirrel', icon: Squirrel, color: 'from-amber-500 to-orange-600' },
  { id: 'rabbit', icon: Rabbit, color: 'from-pink-400 to-rose-500' },
  { id: 'turtle', icon: Turtle, color: 'from-green-500 to-emerald-600' },
  { id: 'sparkles', icon: Sparkles, color: 'from-yellow-300 to-pink-500' },
  { id: 'heart', icon: Heart, color: 'from-red-500 to-pink-600' },
  { id: 'coffee', icon: Coffee, color: 'from-brown-600 to-amber-700' },
  { id: 'trophy', icon: Trophy, color: 'from-yellow-500 to-orange-500' },
  { id: 'brain', icon: Brain, color: 'from-purple-600 to-indigo-700' },
  { id: 'code', icon: Code2, color: 'from-green-500 to-teal-600' }
];

// Problem Data
const problemData = {
  "Beginner": {
  title: "🌱 Beginner Track",
  color: "from-green-500 to-emerald-600",
  weeks: {
    "Week 1": {
      title: "Arrays & Strings",
      days: [
        { topic: "Arrays Basics", problems: [
          {id: 1, title: "Two Sum", difficulty: "Easy", leetcodeNum: 1, points: 10},
          {id: 724, title: "Find Pivot Index", difficulty: "Easy", leetcodeNum: 724, points: 10},
          {id: 1480, title: "Running Sum of 1d Array", difficulty: "Easy", leetcodeNum: 1480, points: 10},
          {id: 1470, title: "Shuffle the Array", difficulty: "Easy", leetcodeNum: 1470, points: 10}
        ]},
        { topic: "Array Operations", problems: [
          {id: 121, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", leetcodeNum: 121, points: 10},
          {id: 53, title: "Maximum Subarray", difficulty: "Easy", leetcodeNum: 53, points: 15},
          {id: 66, title: "Plus One", difficulty: "Easy", leetcodeNum: 66, points: 10}
        ]},
        { topic: "Two Pointers Intro", problems: [
          {id: 26, title: "Remove Duplicates from Sorted Array", difficulty: "Easy", leetcodeNum: 26, points: 10},
          {id: 27, title: "Remove Element", difficulty: "Easy", leetcodeNum: 27, points: 10},
          {id: 88, title: "Merge Sorted Array", difficulty: "Easy", leetcodeNum: 88, points: 10},
          {id: 977, title: "Squares of a Sorted Array", difficulty: "Easy", leetcodeNum: 977, points: 10}
        ]},
        { topic: "Two Pointers Practice", problems: [
          {id: 125, title: "Valid Palindrome", difficulty: "Easy", leetcodeNum: 125, points: 10},
          {id: 167, title: "Two Sum II - Input Array Is Sorted", difficulty: "Easy", leetcodeNum: 167, points: 10},
          {id: 283, title: "Move Zeroes", difficulty: "Easy", leetcodeNum: 283, points: 10}
        ]},
        { topic: "String Basics", problems: [
          {id: 344, title: "Reverse String", difficulty: "Easy", leetcodeNum: 344, points: 10},
          {id: 387, title: "First Unique Character in a String", difficulty: "Easy", leetcodeNum: 387, points: 10},
          {id: 242, title: "Valid Anagram", difficulty: "Easy", leetcodeNum: 242, points: 10},
          {id: 383, title: "Ransom Note", difficulty: "Easy", leetcodeNum: 383, points: 10}
        ]},
        { topic: "String Operations", problems: [
          {id: 14, title: "Longest Common Prefix", difficulty: "Easy", leetcodeNum: 14, points: 10},
          {id: 58, title: "Length of Last Word", difficulty: "Easy", leetcodeNum: 58, points: 10},
          {id: 28, title: "Implement strStr()", difficulty: "Easy", leetcodeNum: 28, points: 10}
        ]},
        { topic: "Week 1 Mixed", problems: [
          {id: 557, title: "Reverse Words in a String III", difficulty: "Easy", leetcodeNum: 557, points: 10},
          {id: 217, title: "Contains Duplicate", difficulty: "Easy", leetcodeNum: 217, points: 10},
          {id: 136, title: "Single Number", difficulty: "Easy", leetcodeNum: 136, points: 10},
          {id: 268, title: "Missing Number", difficulty: "Easy", leetcodeNum: 268, points: 10}
        ]}
      ]
    },
    "Week 2": {
      title: "Linked Lists & Basic Data Structures",
      days: [
        { topic: "Linked List Basics", problems: [
          {id: 206, title: "Reverse Linked List", difficulty: "Easy", leetcodeNum: 206, points: 15},
          {id: 876, title: "Middle of the Linked List", difficulty: "Easy", leetcodeNum: 876, points: 10},
          {id: 237, title: "Delete Node in a Linked List", difficulty: "Easy", leetcodeNum: 237, points: 10}
        ]},
        { topic: "Linked List Operations", problems: [
          {id: 21, title: "Merge Two Sorted Lists", difficulty: "Easy", leetcodeNum: 21, points: 15},
          {id: 141, title: "Linked List Cycle", difficulty: "Easy", leetcodeNum: 141, points: 15},
          {id: 203, title: "Remove Linked List Elements", difficulty: "Easy", leetcodeNum: 203, points: 10},
          {id: 83, title: "Remove Duplicates from Sorted List", difficulty: "Easy", leetcodeNum: 83, points: 10}
        ]},
        { topic: "Linked List Advanced", problems: [
          {id: 234, title: "Palindrome Linked List", difficulty: "Easy", leetcodeNum: 234, points: 15},
          {id: 160, title: "Intersection of Two Linked Lists", difficulty: "Easy", leetcodeNum: 160, points: 15},
          {id: 2, title: "Add Two Numbers", difficulty: "Medium", leetcodeNum: 2, points: 20}
        ]},
        { topic: "Stack Basics", problems: [
          {id: 20, title: "Valid Parentheses", difficulty: "Easy", leetcodeNum: 20, points: 10},
          {id: 225, title: "Implement Stack using Queues", difficulty: "Easy", leetcodeNum: 225, points: 15},
          {id: 682, title: "Baseball Game", difficulty: "Easy", leetcodeNum: 682, points: 10},
          {id: 496, title: "Next Greater Element I", difficulty: "Easy", leetcodeNum: 496, points: 15}
        ]},
        { topic: "Stack Applications", problems: [
          {id: 155, title: "Min Stack", difficulty: "Easy", leetcodeNum: 155, points: 15},
          {id: 844, title: "Backspace String Compare", difficulty: "Easy", leetcodeNum: 844, points: 10},
          {id: 739, title: "Daily Temperatures", difficulty: "Medium", leetcodeNum: 739, points: 20}
        ]},
        { topic: "Queue Basics", problems: [
          {id: 232, title: "Implement Queue using Stacks", difficulty: "Easy", leetcodeNum: 232, points: 15},
          {id: 622, title: "Design Circular Queue", difficulty: "Medium", leetcodeNum: 622, points: 20},
          {id: 933, title: "Number of Recent Calls", difficulty: "Easy", leetcodeNum: 933, points: 10}
        ]},
        { topic: "Week 2 Review", problems: [
          {id: 19, title: "Remove Nth Node From End of List", difficulty: "Medium", leetcodeNum: 19, points: 20},
          {id: 1603, title: "Design Parking System", difficulty: "Easy", leetcodeNum: 1603, points: 10},
          {id: 1614, title: "Maximum Nesting Depth of Parentheses", difficulty: "Easy", leetcodeNum: 1614, points: 10}
        ]}
      ]
    },
    "Week 3": {
      title: "Trees Introduction",
      days: [
        { topic: "Binary Tree Basics", problems: [
          {id: 104, title: "Maximum Depth of Binary Tree", difficulty: "Easy", leetcodeNum: 104, points: 10},
          {id: 226, title: "Invert Binary Tree", difficulty: "Easy", leetcodeNum: 226, points: 15},
          {id: 100, title: "Same Tree", difficulty: "Easy", leetcodeNum: 100, points: 10}
        ]},
        { topic: "Tree Traversals", problems: [
          {id: 94, title: "Binary Tree Inorder Traversal", difficulty: "Easy", leetcodeNum: 94, points: 10},
          {id: 144, title: "Binary Tree Preorder Traversal", difficulty: "Easy", leetcodeNum: 144, points: 10},
          {id: 145, title: "Binary Tree Postorder Traversal", difficulty: "Easy", leetcodeNum: 145, points: 10},
          {id: 112, title: "Path Sum", difficulty: "Easy", leetcodeNum: 112, points: 10}
        ]},
        { topic: "Tree Properties", problems: [
          {id: 101, title: "Symmetric Tree", difficulty: "Easy", leetcodeNum: 101, points: 10},
          {id: 543, title: "Diameter of Binary Tree", difficulty: "Easy", leetcodeNum: 543, points: 10},
          {id: 110, title: "Balanced Binary Tree", difficulty: "Easy", leetcodeNum: 110, points: 10}
        ]},
        { topic: "Tree Algorithms", problems: [
          {id: 617, title: "Merge Two Binary Trees", difficulty: "Easy", leetcodeNum: 617, points: 10},
          {id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcodeNum: 102, points: 15},
          {id: 111, title: "Minimum Depth of Binary Tree", difficulty: "Easy", leetcodeNum: 111, points: 10},
          {id: 404, title: "Sum of Left Leaves", difficulty: "Easy", leetcodeNum: 404, points: 10}
        ]},
        { topic: "BST Basics", problems: [
          {id: 700, title: "Search in a Binary Search Tree", difficulty: "Easy", leetcodeNum: 700, points: 10},
          {id: 701, title: "Insert into a Binary Search Tree", difficulty: "Medium", leetcodeNum: 701, points: 15},
          {id: 938, title: "Range Sum of BST", difficulty: "Easy", leetcodeNum: 938, points: 10}
        ]},
        { topic: "BST Operations", problems: [
          {id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeNum: 98, points: 15},
          {id: 653, title: "Two Sum IV - Input is a BST", difficulty: "Easy", leetcodeNum: 653, points: 10},
          {id: 235, title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Easy", leetcodeNum: 235, points: 10}
        ]},
        { topic: "Week 3 Practice", problems: [
          {id: 108, title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy", leetcodeNum: 108, points: 10},
          {id: 257, title: "Binary Tree Paths", difficulty: "Easy", leetcodeNum: 257, points: 10},
          {id: 501, title: "Find Mode in Binary Search Tree", difficulty: "Easy", leetcodeNum: 501, points: 10}
        ]}
      ]
    },
    "Week 4": {
      title: "Sorting & Searching",
      days: [
        { topic: "Sorting Basics", problems: [
          {id: 75, title: "Sort Colors", difficulty: "Medium", leetcodeNum: 75, points: 15},
          {id: 905, title: "Sort Array By Parity", difficulty: "Easy", leetcodeNum: 905, points: 10},
          {id: 922, title: "Sort Array By Parity II", difficulty: "Easy", leetcodeNum: 922, points: 10}
        ]},
        { topic: "Sorting Applications", problems: [
          {id: 252, title: "Meeting Rooms", difficulty: "Easy", leetcodeNum: 252, points: 10},
          {id: 179, title: "Largest Number", difficulty: "Medium", leetcodeNum: 179, points: 15},
          {id: 1122, title: "Relative Sort Array", difficulty: "Easy", leetcodeNum: 1122, points: 10},
          {id: 1051, title: "Height Checker", difficulty: "Easy", leetcodeNum: 1051, points: 10}
        ]},
        { topic: "Binary Search Basics", problems: [
          {id: 704, title: "Binary Search", difficulty: "Easy", leetcodeNum: 704, points: 10},
          {id: 35, title: "Search Insert Position", difficulty: "Easy", leetcodeNum: 35, points: 10},
          {id: 278, title: "First Bad Version", difficulty: "Easy", leetcodeNum: 278, points: 10}
        ]},
        { topic: "Binary Search Applications", problems: [
          {id: 34, title: "Find First and Last Position of Element", difficulty: "Medium", leetcodeNum: 34, points: 15},
          {id: 852, title: "Peak Index in a Mountain Array", difficulty: "Easy", leetcodeNum: 852, points: 10},
          {id: 367, title: "Valid Perfect Square", difficulty: "Easy", leetcodeNum: 367, points: 10},
          {id: 69, title: "Sqrt(x)", difficulty: "Easy", leetcodeNum: 69, points: 10}
        ]},
        { topic: "Advanced Binary Search", problems: [
          {id: 33, title: "Search in Rotated Sorted Array", difficulty: "Medium", leetcodeNum: 33, points: 15},
          {id: 153, title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium", leetcodeNum: 153, points: 15},
          {id: 74, title: "Search a 2D Matrix", difficulty: "Medium", leetcodeNum: 74, points: 15}
        ]},
        { topic: "Binary Search Practice", problems: [
          {id: 374, title: "Guess Number Higher or Lower", difficulty: "Easy", leetcodeNum: 374, points: 10},
          {id: 441, title: "Arranging Coins", difficulty: "Easy", leetcodeNum: 441, points: 10},
          {id: 162, title: "Find Peak Element", difficulty: "Medium", leetcodeNum: 162, points: 15}
        ]},
        { topic: "Week 4 Review", problems: [
          {id: 875, title: "Koko Eating Bananas", difficulty: "Medium", leetcodeNum: 875, points: 15},
          {id: 1011, title: "Capacity To Ship Packages Within D Days", difficulty: "Medium", leetcodeNum: 1011, points: 15},
          {id: 981, title: "Time Based Key-Value Store", difficulty: "Medium", leetcodeNum: 981, points: 15}
        ]}
      ]
    },
    "Week 5": {
      title: "Hash Maps & Two Pointers Advanced",
      days: [
        { topic: "HashMap Basics", problems: [
          {id: 1, title: "Two Sum", difficulty: "Easy", leetcodeNum: 1, points: 10},
          {id: 49, title: "Group Anagrams", difficulty: "Medium", leetcodeNum: 49, points: 15},
          {id: 219, title: "Contains Duplicate II", difficulty: "Easy", leetcodeNum: 219, points: 10}
        ]},
        { topic: "HashMap Applications", problems: [
          {id: 350, title: "Intersection of Two Arrays II", difficulty: "Easy", leetcodeNum: 350, points: 10},
          {id: 202, title: "Happy Number", difficulty: "Easy", leetcodeNum: 202, points: 10},
          {id: 560, title: "Subarray Sum Equals K", difficulty: "Medium", leetcodeNum: 560, points: 15},
          {id: 454, title: "4Sum II", difficulty: "Medium", leetcodeNum: 454, points: 15}
        ]},
        { topic: "Two Pointers Advanced", problems: [
          {id: 15, title: "3Sum", difficulty: "Medium", leetcodeNum: 15, points: 15},
          {id: 16, title: "3Sum Closest", difficulty: "Medium", leetcodeNum: 16, points: 15},
          {id: 11, title: "Container With Most Water", difficulty: "Medium", leetcodeNum: 11, points: 15}
        ]},
        { topic: "Two Pointers + Arrays", problems: [
          {id: 18, title: "4Sum", difficulty: "Medium", leetcodeNum: 18, points: 15},
          {id: 42, title: "Trapping Rain Water", difficulty: "Hard", leetcodeNum: 42, points: 20},
          {id: 75, title: "Sort Colors", difficulty: "Medium", leetcodeNum: 75, points: 15}
        ]},
        { topic: "Pattern Practice", problems: [
          {id: 5, title: "Longest Palindromic Substring", difficulty: "Medium", leetcodeNum: 5, points: 15},
          {id: 647, title: "Palindromic Substrings", difficulty: "Medium", leetcodeNum: 647, points: 15},
          {id: 680, title: "Valid Palindrome II", difficulty: "Easy", leetcodeNum: 680, points: 10},
          {id: 409, title: "Longest Palindrome", difficulty: "Easy", leetcodeNum: 409, points: 10}
        ]},
        { topic: "Mixed Practice", problems: [
          {id: 238, title: "Product of Array Except Self", difficulty: "Medium", leetcodeNum: 238, points: 15},
          {id: 347, title: "Top K Frequent Elements", difficulty: "Medium", leetcodeNum: 347, points: 15},
          {id: 448, title: "Find All Numbers Disappeared in Array", difficulty: "Easy", leetcodeNum: 448, points: 10}
        ]},
        { topic: "Week 5 Review", problems: [
          {id: 128, title: "Longest Consecutive Sequence", difficulty: "Medium", leetcodeNum: 128, points: 15},
          {id: 380, title: "Insert Delete GetRandom O(1)", difficulty: "Medium", leetcodeNum: 380, points: 15},
          {id: 41, title: "First Missing Positive", difficulty: "Hard", leetcodeNum: 41, points: 20}
        ]}
      ]
    },
    "Week 6": {
      title: "Sliding Window & Foundation Complete",
      days: [
        { topic: "Sliding Window Basics", problems: [
          {id: 643, title: "Maximum Average Subarray I", difficulty: "Easy", leetcodeNum: 643, points: 10},
          {id: 220, title: "Contains Duplicate III", difficulty: "Medium", leetcodeNum: 220, points: 15},
          {id: 209, title: "Minimum Size Subarray Sum", difficulty: "Medium", leetcodeNum: 209, points: 15}
        ]},
        { topic: "Variable Window", problems: [
          {id: 3, title: "Longest Substring Without Repeating Characters", difficulty: "Medium", leetcodeNum: 3, points: 15},
          {id: 424, title: "Longest Repeating Character Replacement", difficulty: "Medium", leetcodeNum: 424, points: 15},
          {id: 567, title: "Permutation in String", difficulty: "Medium", leetcodeNum: 567, points: 15}
        ]},
        { topic: "Window + HashMap", problems: [
          {id: 438, title: "Find All Anagrams in a String", difficulty: "Medium", leetcodeNum: 438, points: 15},
          {id: 76, title: "Minimum Window Substring", difficulty: "Hard", leetcodeNum: 76, points: 20},
          {id: 30, title: "Substring with Concatenation of All Words", difficulty: "Hard", leetcodeNum: 30, points: 20}
        ]},
        { topic: "Advanced Window", problems: [
          {id: 1004, title: "Max Consecutive Ones III", difficulty: "Medium", leetcodeNum: 1004, points: 15},
          {id: 904, title: "Fruit Into Baskets", difficulty: "Medium", leetcodeNum: 904, points: 15},
          {id: 340, title: "Longest Substring with At Most K Distinct Characters", difficulty: "Medium", leetcodeNum: 340, points: 15},
          {id: 992, title: "Subarrays with K Different Integers", difficulty: "Hard", leetcodeNum: 992, points: 20}
        ]},
        { topic: "Window Practice", problems: [
          {id: 1456, title: "Maximum Number of Vowels in Substring", difficulty: "Medium", leetcodeNum: 1456, points: 15},
          {id: 1208, title: "Get Equal Substrings Within Budget", difficulty: "Medium", leetcodeNum: 1208, points: 15},
          {id: 239, title: "Sliding Window Maximum", difficulty: "Hard", leetcodeNum: 239, points: 20}
        ]},
        { topic: "Mixed Algorithms", problems: [
          {id: 713, title: "Subarray Product Less Than K", difficulty: "Medium", leetcodeNum: 713, points: 15},
          {id: 930, title: "Binary Subarrays With Sum", difficulty: "Medium", leetcodeNum: 930, points: 15},
          {id: 795, title: "Number of Subarrays with Bounded Maximum", difficulty: "Medium", leetcodeNum: 795, points: 15}
        ]},
        { topic: "Foundation Review", problems: [
          {id: 845, title: "Longest Mountain in Array", difficulty: "Medium", leetcodeNum: 845, points: 15},
          {id: 442, title: "Find All Duplicates in an Array", difficulty: "Medium", leetcodeNum: 442, points: 15},
          {id: 73, title: "Set Matrix Zeroes", difficulty: "Medium", leetcodeNum: 73, points: 15},
          {id: 54, title: "Spiral Matrix", difficulty: "Medium", leetcodeNum: 54, points: 15}
        ]},
        { topic: "October Final", problems: [
          {id: 48, title: "Rotate Image", difficulty: "Medium", leetcodeNum: 48, points: 15},
          {id: 55, title: "Jump Game", difficulty: "Medium", leetcodeNum: 55, points: 15}
        ]}
      ]
    }
  }
},
  "Intermediate": {
    title: "🚀 Intermediate Track",
    color: "from-blue-500 to-indigo-600",
    weeks: {
      "Week 1": {
        title: "Two Pointers & Sliding Window",
        days: [
          { topic: "Two Pointers Advanced", problems: [
            {id: 15, title: "3Sum", difficulty: "Medium", leetcodeNum: 15, points: 25},
            {id: 11, title: "Container With Most Water", difficulty: "Medium", leetcodeNum: 11, points: 25}
          ]},
          { topic: "Sliding Window", problems: [
            {id: 3, title: "Longest Substring Without Repeating", difficulty: "Medium", leetcodeNum: 3, points: 30},
            {id: 438, title: "Find All Anagrams in a String", difficulty: "Medium", leetcodeNum: 438, points: 30}
          ]}
        ]
      },
      "Week 2": {
        title: "Trees & Graphs",
        days: [
          { topic: "Binary Trees", problems: [
            {id: 102, title: "Binary Tree Level Order Traversal", difficulty: "Medium", leetcodeNum: 102, points: 30},
            {id: 98, title: "Validate Binary Search Tree", difficulty: "Medium", leetcodeNum: 98, points: 35}
          ]}
        ]
      }
    }
  },
  "Advanced": {
    title: "⚡ Advanced Track",
    color: "from-purple-500 to-pink-600",
    weeks: {
      "Week 1": {
        title: "Dynamic Programming",
        days: [
          { topic: "DP Fundamentals", problems: [
            {id: 72, title: "Edit Distance", difficulty: "Hard", leetcodeNum: 72, points: 50},
            {id: 42, title: "Trapping Rain Water", difficulty: "Hard", leetcodeNum: 42, points: 50},
            {id: 76, title: "Minimum Window Substring", difficulty: "Hard", leetcodeNum: 76, points: 50}
          ]}
        ]
      }
    }
  }
};

const CodeQuestApp = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTrack, setSelectedTrack] = useState('Beginner');
  const [solvedProblems, setSolvedProblems] = useState(new Set());
  const [userStats, setUserStats] = useState({ points: 0, streak: 0, solved_count: 0, rank: 0 });
  const [leaderboard, setLeaderboard] = useState([]);
  const [weeklyStreak, setWeeklyStreak] = useState([]);
  const [expandedWeeks, setExpandedWeeks] = useState(new Set(['Week 1']));
  const [leetcodeUsername, setLeetcodeUsername] = useState('');
  const [leetcodeStats, setLeetcodeStats] = useState(null);
  const [isLoadingLeetcode, setIsLoadingLeetcode] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedUserProfile, setSelectedUserProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState('user');
  const [isLoading, setIsLoading] = useState(false);

  // Authentication
  useEffect(() => {
    checkUser();
    supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        loadUserData(session.user.id);
      } else {
        setUser(null);
      }
    });
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(session.user);
      await loadUserData(session.user.id);
    }
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: "https://comp-umber.vercel.app"
      }
    });
    if (error) console.error('Error signing in:', error);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  // Load user data from Supabase
  const loadUserData = async (userId) => {
    try {
      const { data: stats } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (stats) {
        setUserStats(stats);
        setSolvedProblems(new Set(stats.solved_problems || []));
        setLeetcodeUsername(stats.leetcode_username || '');
        setSelectedAvatar(stats.avatar || 'user');
        if (stats.leetcode_stats) {
          setLeetcodeStats(stats.leetcode_stats);
        }
      } else {
        const { data: newStats } = await supabase
          .from('user_stats')
          .insert({
            user_id: userId,
            points: 0,
            streak: 0,
            solved_count: 0,
            solved_problems: [],
            avatar: 'user',
            name: user?.user_metadata?.full_name || user?.user_metadata?.email
          })
          .select()
          .single();
        setUserStats(newStats);
      }

      const { data: streakData } = await supabase
        .from('weekly_streaks')
        .select('*')
        .eq('user_id', userId)
        .order('week_number', { ascending: false })
        .limit(12);
      
      setWeeklyStreak(streakData || []);
      await loadLeaderboard();
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const loadLeaderboard = async () => {
    const { data } = await supabase
      .from('user_stats')
      .select('*')
      .order('points', { ascending: false })
      .limit(50);
    
    setLeaderboard(data || []);
  };

const handleProblemSolved = async (problemId, points) => {
  if (!user || !userStats) return;

  setIsLoading(true); // Start loading

  const isAlreadySolved = solvedProblems.has(problemId);
  const newSolvedProblems = new Set(solvedProblems);

  if (isAlreadySolved) {
    newSolvedProblems.delete(problemId);
  } else {
    newSolvedProblems.add(problemId);
  }

  const pointsChange = isAlreadySolved ? -points : points;
  const newPoints = Math.max(0, userStats.points + pointsChange);
  const newSolvedCount = newSolvedProblems.size;

  try {
    const { error } = await supabase
      .from('user_stats')
      .update({
        points: newPoints,
        solved_count: newSolvedCount,
        solved_problems: Array.from(newSolvedProblems),
        last_solved: isAlreadySolved ? null : new Date().toISOString()
      })
      .eq('user_id', user.id);

    if (error) {
      console.error('Error updating stats:', error);
      alert('Failed to update progress. Please try again.');
      setIsLoading(false); // Stop loading on error
      return;
    }

    if (!isAlreadySolved) {
      await updateWeeklyStreak();
    }

    setSolvedProblems(newSolvedProblems);
    setUserStats({ 
      ...userStats, 
      points: newPoints, 
      solved_count: newSolvedCount,
      last_solved: isAlreadySolved ? userStats.last_solved : new Date().toISOString()
    });
    await loadLeaderboard();

    setIsLoading(false); // Stop loading after all async work
  } catch (error) {
    console.error('Error handling problem solved:', error);
    alert('An error occurred. Please try again.');
    setIsLoading(false); // Stop loading on error
  }
};

  const updateWeeklyStreak = async () => {
    const today = new Date();
    const currentWeek = Math.ceil((today.getDate() - today.getDay() + 1) / 7);
    
    const { data: existingWeek } = await supabase
      .from('weekly_streaks')
      .select('*')
      .eq('user_id', user.id)
      .eq('week_number', currentWeek)
      .single();

    if (existingWeek) {
      await supabase
        .from('weekly_streaks')
        .update({ problems_solved: existingWeek.problems_solved + 1 })
        .eq('id', existingWeek.id);
    } else {
      await supabase
        .from('weekly_streaks')
        .insert({
          user_id: user.id,
          week_number: currentWeek,
          problems_solved: 1
        });
    }
  };
  const calculateStreak = (submissionCalendar) => {
  if (!submissionCalendar || Object.keys(submissionCalendar).length === 0) {
    return 0;
  }

  // Convert Unix timestamps to dates and remove duplicates
  const submissionDates = new Set();
  Object.keys(submissionCalendar).forEach(timestamp => {
    const date = new Date(parseInt(timestamp) * 1000);
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
    submissionDates.add(dateString);
  });

  // Sort dates in descending order (most recent first)
  const sortedDates = Array.from(submissionDates).sort((a, b) => 
    new Date(b) - new Date(a)
  );

  if (sortedDates.length === 0) return 0;

  // Get today's date in YYYY-MM-DD format
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toISOString().split('T')[0];

  // Get yesterday's date
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // Check if streak is active (submission today or yesterday)
  if (sortedDates[0] !== todayStr && sortedDates[0] !== yesterdayStr) {
    return 0; // Streak broken
  }

  // Count consecutive days from most recent submission
  let streak = 1;
  let currentDate = new Date(sortedDates[0]);

  for (let i = 1; i < sortedDates.length; i++) {
    const previousDate = new Date(sortedDates[i]);
    const expectedDate = new Date(currentDate);
    expectedDate.setDate(expectedDate.getDate() - 1);

    // Check if previous date is exactly one day before current date
    if (previousDate.toISOString().split('T')[0] === 
        expectedDate.toISOString().split('T')[0]) {
      streak++;
      currentDate = previousDate;
    } else {
      break; // Gap found, stop counting
    }
  }

  return streak;
};


const fetchLeetcodeStats = async (username) => {
    setIsLoadingLeetcode(true);
    try {
      const [userInfoRes, userProfileRes, calendarRes] = await Promise.all([
        fetch(`https://alfa-leetcode-api.onrender.com/${username}`),
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
        fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`)
      ]);

      if (!userInfoRes.ok || !userProfileRes.ok || !calendarRes.ok) {
        throw new Error('User not found or API error');
      }

      const userInfo = await userInfoRes.json();
      const userProfile = await userProfileRes.json();
      const calendar = await calendarRes.json();

      // Calculate streak from submission calendar
      const currentStreak = calculateStreak(calendar.submissionCalendar);
      const totalActiveDays = Object.keys(calendar.submissionCalendar || {}).length;

      const leetcodeData = {
        username: username,
        realName: userInfo.name || username,
        ranking: userInfo.ranking || 0,
        reputation: userInfo.reputation || 0,
        solved: {
          easy: userProfile.easySolved || 0,
          medium: userProfile.mediumSolved || 0,
          hard: userProfile.hardSolved || 0,
          all: userProfile.solvedProblem || 0
        },
        submissions: {
          easy: userProfile.easySolved || 0,
          medium: userProfile.mediumSolved || 0,
          hard: userProfile.hardSolved || 0,
          all: userProfile.totalSubmissionNum?.[0]?.count || 0
        },
        calendar: {
          streak: currentStreak,
          totalActiveDays: totalActiveDays,
          submissionCalendar: calendar.submissionCalendar || {}
        },
        contestRanking: {
          attendedContestsCount: userInfo.contestAttend || 0,
          rating: Math.round(userInfo.contestRating || 0),
          globalRanking: userInfo.contestGlobalRanking || 0,
          topPercentage: userInfo.contestTopPercentage?.toFixed(2) || '0.00'
        },
        badges: userInfo.badges?.map(badge => ({
          displayName: badge.displayName || badge.name,
          icon: badge.icon || '🏆'
        })) || [],
        recentSubmissions: userInfo.recentSubmissions?.slice(0, 10) || [],
        lastUpdated: new Date().toISOString()
      };

      setLeetcodeStats(leetcodeData);
      
      await supabase
        .from('user_stats')
        .update({
          leetcode_username: username,
          leetcode_stats: leetcodeData
        })
        .eq('user_id', user.id);

      return leetcodeData;
    } catch (error) {
      console.error('Error fetching LeetCode stats:', error);
      alert(`Failed to fetch LeetCode profile for "${username}". Please verify the username is correct and try again.`);
      return null;
    } finally {
      setIsLoadingLeetcode(false);
    }
  };


  const saveLeetcodeUsername = async () => {
    if (!leetcodeUsername.trim()) {
      alert('Please enter a LeetCode username');
      return;
    }
    await fetchLeetcodeStats(leetcodeUsername.trim());
  };

  const viewUserProfile = async (userId) => {
    const { data: userData } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (userData) {
      setSelectedUserProfile(userData);
      setShowProfileModal(true);
    }
  };

  const updateAvatar = async (avatarId) => {
    setSelectedAvatar(avatarId);
    await supabase
      .from('user_stats')
      .update({ avatar: avatarId })
      .eq('user_id', user.id);
    setShowAvatarPicker(false);
  };

  const getAvatarComponent = (avatarId) => {
    const avatar = avatarIcons.find(a => a.id === avatarId) || avatarIcons[0];
    const IconComponent = avatar.icon;
    return { IconComponent, color: avatar.color };
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Hard': return 'text-red-400 bg-red-500/10 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30';
    }
  };

  const toggleWeek = (weekKey) => {
    setExpandedWeeks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(weekKey)) {
        newSet.delete(weekKey);
      } else {
        newSet.add(weekKey);
      }
      return newSet;
    });
  };

  const filteredLeaderboard = leaderboard.filter(player => 
    (player.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
    (player.leetcode_username?.toLowerCase() || '').includes(searchQuery.toLowerCase())
  );

  // Login Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CodeQuest
          </h1>
          <p className="text-gray-400 mb-8">Your Ultimate LeetCode Journey Tracker</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={signInWithGoogle}
            className="w-full bg-white text-gray-900 py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </motion.button>
        </motion.div>
      </div>
    );
  }

  const { IconComponent: CurrentAvatarIcon, color: currentAvatarColor } = getAvatarComponent(selectedAvatar);

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gray-800/50 backdrop-blur-xl border-b border-gray-700 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CodeQuest</h1>
                <p className="text-xs text-gray-400">Race to the Top</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-6 px-6 py-2 bg-gray-700/50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">{userStats.points}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="font-bold">{userStats.streak}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="font-bold">{userStats.solved_count}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">{user.user_metadata?.full_name}</p>
                  <p className="text-xs text-gray-400">Rank #{leaderboard.findIndex(u => u.user_id === user.id) + 1 || '-'}</p>
                </div>
                <button 
                  onClick={() => setShowAvatarPicker(!showAvatarPicker)}
                  className="relative"
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentAvatarColor} flex items-center justify-center border-2 border-blue-500 hover:border-purple-500 transition-colors cursor-pointer`}>
                    <CurrentAvatarIcon className="w-6 h-6 text-white" />
                  </div>
                </button>
                <button onClick={signOut} className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <LogOut className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-2 mt-4">
            {['dashboard', 'problems', 'leaderboard', 'profile', 'revision'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      {/* Avatar Picker Modal */}
      <AnimatePresence>
        {showAvatarPicker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAvatarPicker(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl border border-gray-700 p-6 max-w-md w-full"
            >
              <h3 className="text-xl font-bold mb-4">Choose Your Avatar</h3>
              <div className="grid grid-cols-4 gap-3">
                {avatarIcons.map(avatar => {
                  const AvatarIcon = avatar.icon;
                  return (
                    <button
                      key={avatar.id}
                      onClick={() => updateAvatar(avatar.id)}
                      className={`aspect-square rounded-xl bg-gradient-to-br ${avatar.color} flex items-center justify-center hover:scale-110 transition-transform ${
                        selectedAvatar === avatar.id ? 'ring-4 ring-white' : ''
                      }`}
                    >
                      <AvatarIcon className="w-8 h-8 text-white" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* User Profile Modal */}
      <AnimatePresence>
        {showProfileModal && selectedUserProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setShowProfileModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl border border-gray-700 p-6 max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {(() => {
                    const { IconComponent: ProfileIcon, color: profileColor } = getAvatarComponent(selectedUserProfile.avatar || 'user');
                    return (
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${profileColor} flex items-center justify-center`}>
                        <ProfileIcon className="w-10 h-10 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-2xl font-bold">{selectedUserProfile.name}</h2>
                    <p className="text-gray-400">@{selectedUserProfile.leetcode_username || 'No LeetCode linked'}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-sm">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        {selectedUserProfile.points} pts
                      </span>
                      <span className="flex items-center gap-1 text-sm">
                        <Medal className="w-4 h-4 text-purple-400" />
                        Rank #{leaderboard.findIndex(u => u.user_id === selectedUserProfile.user_id) + 1}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-2xl">&times;</span>
                </button>
              </div>

              {/* LeetCode Stats */}
              {selectedUserProfile.leetcode_stats ? (
                <div className="space-y-6">
                  {/* Overview Cards */}
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                      <p className="text-sm text-gray-400 mb-1">Easy Solved</p>
                      <p className="text-2xl font-bold text-green-400">{selectedUserProfile.leetcode_stats.solved.easy}</p>
                      <p className="text-xs text-gray-500 mt-1">/{selectedUserProfile.leetcode_stats.submissions.easy} attempts</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl p-4 border border-yellow-500/30">
                      <p className="text-sm text-gray-400 mb-1">Medium Solved</p>
                      <p className="text-2xl font-bold text-yellow-400">{selectedUserProfile.leetcode_stats.solved.medium}</p>
                      <p className="text-xs text-gray-500 mt-1">/{selectedUserProfile.leetcode_stats.submissions.medium} attempts</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl p-4 border border-red-500/30">
                      <p className="text-sm text-gray-400 mb-1">Hard Solved</p>
                      <p className="text-2xl font-bold text-red-400">{selectedUserProfile.leetcode_stats.solved.hard}</p>
                      <p className="text-xs text-gray-500 mt-1">/{selectedUserProfile.leetcode_stats.submissions.hard} attempts</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-xl p-4 border border-purple-500/30">
                      <p className="text-sm text-gray-400 mb-1">Total Solved</p>
                      <p className="text-2xl font-bold text-purple-400">{selectedUserProfile.leetcode_stats.solved.all}</p>
                      <p className="text-xs text-gray-500 mt-1">/{selectedUserProfile.leetcode_stats.submissions.all} attempts</p>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                        <h3 className="font-bold">Global Ranking</h3>
                      </div>
                      <p className="text-3xl font-bold text-blue-400">#{selectedUserProfile.leetcode_stats.ranking?.toLocaleString()}</p>
                      <p className="text-sm text-gray-400 mt-1">Reputation: {selectedUserProfile.leetcode_stats.reputation}</p>
                    </div>

                    <div className="bg-gray-700/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Flame className="w-5 h-5 text-orange-400" />
                        <h3 className="font-bold">Activity Streak</h3>
                      </div>
                      <p className="text-3xl font-bold text-orange-400">{selectedUserProfile.leetcode_stats.calendar.streak} days</p>
                      <p className="text-sm text-gray-400 mt-1">Total active: {selectedUserProfile.leetcode_stats.calendar.totalActiveDays} days</p>
                    </div>
                  </div>

                  {/* Contest Stats */}
                  {selectedUserProfile.leetcode_stats.contestRanking && (
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-4 border border-purple-500/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-6 h-6 text-purple-400" />
                        <h3 className="font-bold text-lg">Contest Performance</h3>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-400">Rating</p>
                          <p className="text-2xl font-bold text-purple-400">{selectedUserProfile.leetcode_stats.contestRanking.rating}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Global Rank</p>
                          <p className="text-2xl font-bold text-pink-400">#{selectedUserProfile.leetcode_stats.contestRanking.globalRanking?.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Contests</p>
                          <p className="text-2xl font-bold text-blue-400">{selectedUserProfile.leetcode_stats.contestRanking.attendedContestsCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Top</p>
                          <p className="text-2xl font-bold text-green-400">{selectedUserProfile.leetcode_stats.contestRanking.topPercentage}%</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Badges */}
                  {selectedUserProfile.leetcode_stats.badges?.length > 0 && (
                    <div className="bg-gray-700/30 rounded-xl p-4">
                      <h3 className="font-bold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400" />
                        Badges Earned
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedUserProfile.leetcode_stats.badges.map((badge, idx) => (
                          <div key={idx} className="bg-gray-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2">
                            <span>{badge.icon}</span>
                            <span>{badge.displayName}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Recent Submissions */}
                  {selectedUserProfile.leetcode_stats.recentSubmissions?.length > 0 && (
                    <div className="bg-gray-700/30 rounded-xl p-4">
                      <h3 className="font-bold mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-400" />
                        Recent Submissions
                      </h3>
                      <div className="space-y-2">
                        {selectedUserProfile.leetcode_stats.recentSubmissions.slice(0, 5).map((sub, idx) => (
                          <div key={idx} className="flex items-center justify-between p-2 bg-gray-800/50 rounded-lg">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{sub.title}</p>
                              <p className="text-xs text-gray-400">{new Date(sub.timestamp).toLocaleDateString()}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-400">{sub.lang}</span>
                              <span className={`text-xs px-2 py-1 rounded ${
                                sub.statusDisplay === 'Accepted' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-red-500/20 text-red-400'
                              }`}>
                                {sub.statusDisplay}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View on LeetCode Button */}
                  <a
                    href={`https://leetcode.com/${selectedUserProfile.leetcode_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Full Profile on LeetCode
                  </a>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Code2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">This user hasn't linked their LeetCode profile yet</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Race Track Visualization */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-1">Your Race Progress</h2>
                    <p className="text-gray-400">Keep the momentum going!</p>
                  </div>
                  <Rocket className="w-12 h-12 text-purple-400" />
                </div>

                {/* Race Track */}
                <div className="relative h-32 bg-gray-800/50 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center">
                    {/* Race lines */}
                    <div className="absolute inset-0 flex">
                      {[...Array(20)].map((_, i) => (
                        <div key={i} className="flex-1 border-r border-gray-700/30" />
                      ))}
                    </div>
                    
                    {/* Your position */}
                    <motion.div
                      initial={{ left: '0%' }}
                      animate={{ left: `${Math.min((userStats.solved_count / 100) * 100, 95)}%` }}
                      transition={{ duration: 1, type: 'spring' }}
                      className="absolute flex flex-col items-center"
                    >
                      <div className="mb-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {userStats.solved_count} solved
                      </div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${currentAvatarColor} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                        <CurrentAvatarIcon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Finish line */}
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-orange-500">
                      <div className="absolute -top-8 -right-4 text-center">
                        <Trophy className="w-8 h-8 text-yellow-400 mx-auto" />
                        <p className="text-xs text-yellow-400 mt-1">100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Streak */}
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Activity className="w-6 h-6 text-blue-400" />
                    Weekly Streak
                  </h3>
                  <div className="flex items-center gap-2 text-orange-400">
                    <Flame className="w-5 h-5" />
                    <span className="font-bold text-lg">{userStats.streak} days</span>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-2">
                  {[...Array(12)].map((_, weekIdx) => {
                    const weekData = weeklyStreak.find(w => w.week_number === weekIdx + 1);
                    const problemsSolved = weekData?.problems_solved || 0;
                    const intensity = Math.min(problemsSolved / 10, 1);
                    
                    return (
                      <motion.div
                        key={weekIdx}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: weekIdx * 0.05 }}
                        className="aspect-square rounded-lg relative group cursor-pointer"
                        style={{
                          backgroundColor: intensity > 0 
                            ? `rgba(59, 130, 246, ${0.2 + intensity * 0.8})` 
                            : 'rgba(75, 85, 99, 0.3)'
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                          {problemsSolved || ''}
                        </div>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          Week {weekIdx + 1}: {problemsSolved} problems
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
                
                <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                  <span>Week 1</span>
                  <span>Week 12</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-xl rounded-xl border border-green-500/30 p-6"
                >
                  <CheckCircle2 className="w-8 h-8 text-green-400 mb-3" />
                  <p className="text-3xl font-bold mb-1">{userStats.solved_count}</p>
                  <p className="text-gray-400">Problems Solved</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 backdrop-blur-xl rounded-xl border border-yellow-500/30 p-6"
                >
                  <Trophy className="w-8 h-8 text-yellow-400 mb-3" />
                  <p className="text-3xl font-bold mb-1">{userStats.points}</p>
                  <p className="text-gray-400">Total Points</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6"
                >
                  <Medal className="w-8 h-8 text-purple-400 mb-3" />
                  <p className="text-3xl font-bold mb-1">#{leaderboard.findIndex(u => u.user_id === user.id) + 1 || '-'}</p>
                  <p className="text-gray-400">Global Rank</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Problems Tab */}
          {activeTab === 'problems' && (
            <motion.div
              key="problems"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Track Selection */}
              <div className="flex gap-4 mb-6">
                {Object.keys(problemData).map(track => (
                  <button
                    key={track}
                    onClick={() => setSelectedTrack(track)}
                    className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                      selectedTrack === track
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-1">{problemData[track].title}</h3>
                    <p className="text-sm text-gray-400">
                      {Object.keys(problemData[track].weeks).length} weeks
                    </p>
                  </button>
                ))}
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {Object.entries(problemData[selectedTrack].weeks).map(([weekKey, week]) => (
                  <div key={weekKey} className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 overflow-hidden">
                    <button
                      onClick={() => toggleWeek(weekKey)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {expandedWeeks.has(weekKey) ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        <span className="font-bold">{weekKey}: {week.title}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {week.days.reduce((acc, day) => acc + day.problems.length, 0)} problems
                      </span>
                    </button>

                    <AnimatePresence>
                      {expandedWeeks.has(weekKey) && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          className="overflow-hidden"
                        >
                          {week.days.map((day, dayIdx) => (
                            <div key={dayIdx} className="border-t border-gray-700">
                              <div className="px-4 py-3 bg-gray-700/30">
                                <p className="text-sm font-medium text-gray-300">{day.topic}</p>
                              </div>
                              <div className="divide-y divide-gray-700">
                                {day.problems.map(problem => {
                                  const isSolved = solvedProblems.has(problem.id);
                                  return (
                                    <div
                                      key={problem.id}
                                      className="p-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
                                    >
                                      <div className="flex items-center gap-4 flex-1">
                                        <button
                                        id={problem.id}
  onClick={() => handleProblemSolved(problem.id, problem.points)}
  disabled={isLoading} // disable button while loading
  className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
    isSolved
      ? 'bg-green-500 border-green-500'
      : 'border-gray-600 hover:border-gray-500'
  } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} // dim and disable cursor when loading
>
  {isLoading ? (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      ></path>
    </svg>
  ) : (
    isSolved && <CheckCircle2 className="w-4 h-4 text-white" />
  )}
</button>

                                        
                                        <div className="flex-1">
                                          <div className="flex items-center gap-3">
                                            <span className="text-gray-500 font-mono text-sm">#{problem.leetcodeNum}</span>
                                            <span className={`font-medium ${isSolved ? 'text-gray-400 line-through' : 'text-white'}`}>
                                              {problem.title}
                                            </span>
                                          </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                                            {problem.difficulty}
                                          </span>
                                          <span className="text-yellow-400 font-bold">{problem.points} pts</span>
                                        </div>
                                      </div>

                                      <a
                                        href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-4 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors group"
                                      >
                                        <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                      </a>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Trophy className="w-7 h-7 text-yellow-400" />
                        Global Leaderboard
                      </h2>
                      <p className="text-gray-400 mt-1">Top coders in your community</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Your Rank</p>
                      <p className="text-3xl font-bold text-blue-400">
                        #{leaderboard.findIndex(u => u.user_id === user.id) + 1 || '-'}
                      </p>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by name or LeetCode username..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="divide-y divide-gray-700 max-h-[600px] overflow-y-auto">
                  {filteredLeaderboard.map((player, index) => {
                    const isCurrentUser = player.user_id === user.id;
                    const actualIndex = leaderboard.findIndex(u => u.user_id === player.user_id);
                    const getRankIcon = () => {
                      if (actualIndex === 0) return <Crown className="w-6 h-6 text-yellow-400" />;
                      if (actualIndex === 1) return <Medal className="w-6 h-6 text-gray-300" />;
                      if (actualIndex === 2) return <Medal className="w-6 h-6 text-orange-400" />;
                      return <span className="text-gray-500 font-bold text-lg">#{actualIndex + 1}</span>
                    };

                    const { IconComponent: PlayerIcon, color: playerColor } = getAvatarComponent(player.avatar || 'user');

                    return (
                      <motion.div
                        key={player.user_id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`p-4 flex items-center gap-4 ${
                          isCurrentUser ? 'bg-blue-500/10 border-l-4 border-blue-500' : 'hover:bg-gray-700/30'
                        } transition-colors cursor-pointer`}
                        onClick={() => viewUserProfile(player.user_id)}
                      >
                        <div className="w-12 flex justify-center">
                          {getRankIcon()}
                        </div>

                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${playerColor} flex items-center justify-center ${
                          actualIndex < 3 ? 'ring-2 ring-yellow-400' : ''
                        }`}>
                          <PlayerIcon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-lg">{player.name || player.user_id}</p>
                            {isCurrentUser && (
                              <span className="px-2 py-0.5 bg-blue-500 text-xs rounded-full">You</span>
                            )}
                            {player.leetcode_username && (
                              <span className="px-2 py-0.5 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                                @{player.leetcode_username}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4" />
                              {player.solved_count} solved
                            </span>
                            <span className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-400" />
                              {player.streak} day streak
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-2 justify-end">
                            <Trophy className="w-5 h-5 text-yellow-400" />
                            <span className="text-2xl font-bold text-yellow-400">
                              {player.points}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">points</p>
                        </div>

                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* User Profile Card */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl border border-blue-500/30 p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${currentAvatarColor} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}
                    onClick={() => setShowAvatarPicker(true)}
                  >
                    <CurrentAvatarIcon className="w-12 h-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">{user.user_metadata?.full_name}</h2>
                    <p className="text-gray-400 mb-3">{user.email}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 bg-yellow-500/20 px-3 py-1 rounded-lg">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <span className="font-bold">{userStats.points} points</span>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-lg">
                        <Medal className="w-5 h-5 text-purple-400" />
                        <span className="font-bold">Rank #{leaderboard.findIndex(u => u.user_id === user.id) + 1 || '-'}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-orange-500/20 px-3 py-1 rounded-lg">
                        <Flame className="w-5 h-5 text-orange-400" />
                        <span className="font-bold">{userStats.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LeetCode Integration */}
              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-xl rounded-2xl border border-orange-500/30 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Code2 className="w-8 h-8 text-orange-400" />
                  <div>
                    <h2 className="text-2xl font-bold">LeetCode Integration</h2>
                    <p className="text-gray-400">Connect your LeetCode profile to unlock detailed analytics</p>
                  </div>
                </div>

                <div className="flex gap-3 mb-6">
                  <input
                    type="text"
                    value={leetcodeUsername}
                    onChange={(e) => setLeetcodeUsername(e.target.value)}
                    placeholder="Enter your LeetCode username"
                    className="flex-1 bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={saveLeetcodeUsername}
                    disabled={isLoadingLeetcode}
                    className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isLoadingLeetcode ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Sync Profile
                      </>
                    )}
                  </button>
                </div>

                {/* LeetCode Stats Display */}
                {leetcodeStats && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Stats Overview */}
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                        <p className="text-sm text-gray-400 mb-1">Easy</p>
                        <p className="text-3xl font-bold text-green-400">{leetcodeStats.solved.easy}</p>
                        <p className="text-xs text-gray-500 mt-1">solved</p>
                      </div>
                      <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-xl p-4 border border-yellow-500/30">
                        <p className="text-sm text-gray-400 mb-1">Medium</p>
                        <p className="text-3xl font-bold text-yellow-400">{leetcodeStats.solved.medium}</p>
                        <p className="text-xs text-gray-500 mt-1">solved</p>
                      </div>
                      <div className="bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-xl p-4 border border-red-500/30">
                        <p className="text-sm text-gray-400 mb-1">Hard</p>
                        <p className="text-3xl font-bold text-red-400">{leetcodeStats.solved.hard}</p>
                        <p className="text-xs text-gray-500 mt-1">solved</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-xl p-4 border border-purple-500/30">
                        <p className="text-sm text-gray-400 mb-1">Total</p>
                        <p className="text-3xl font-bold text-purple-400">{leetcodeStats.solved.all}</p>
                        <p className="text-xs text-gray-500 mt-1">solved</p>
                      </div>
                    </div>

                    {/* Detailed Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          <h3 className="font-bold">Ranking</h3>
                        </div>
                        <p className="text-3xl font-bold text-blue-400 mb-1">#{leetcodeStats.ranking?.toLocaleString()}</p>
                        <p className="text-sm text-gray-400">Global • {leetcodeStats.reputation} reputation</p>
                      </div>

                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <div className="flex items-center gap-2 mb-3">
                          <Flame className="w-5 h-5 text-orange-400" />
                          <h3 className="font-bold">Activity</h3>
                        </div>
                        <p className="text-3xl font-bold text-orange-400 mb-1">{leetcodeStats.calendar.streak}</p>
                        <p className="text-sm text-gray-400">day streak • {leetcodeStats.calendar.totalActiveDays} total days</p>
                      </div>
                    </div>

                    {/* Contest Stats */}
                    {leetcodeStats.contestRanking && (
                      <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-center gap-2 mb-4">
                          <Award className="w-6 h-6 text-purple-400" />
                          <h3 className="font-bold text-lg">Contest Performance</h3>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Rating</p>
                            <p className="text-2xl font-bold text-purple-400">{leetcodeStats.contestRanking.rating}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Global Rank</p>
                            <p className="text-2xl font-bold text-pink-400">#{leetcodeStats.contestRanking.globalRanking?.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Contests</p>
                            <p className="text-2xl font-bold text-blue-400">{leetcodeStats.contestRanking.attendedContestsCount}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400 mb-1">Top</p>
                            <p className="text-2xl font-bold text-green-400">{leetcodeStats.contestRanking.topPercentage}%</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Badges */}
                    {leetcodeStats.badges?.length > 0 && (
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          Badges Earned ({leetcodeStats.badges.length})
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {leetcodeStats.badges.map((badge, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                              <span className="text-2xl">{badge.icon}</span>
                              <span className="font-medium">{badge.displayName}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recent Activity */}
                    {leetcodeStats.recentSubmissions?.length > 0 && (
                      <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                          <Activity className="w-5 h-5 text-blue-400" />
                          Recent Submissions
                        </h3>
                        <div className="space-y-2">
                          {leetcodeStats.recentSubmissions.slice(0, 8).map((sub, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
                              <div className="flex-1">
                                <p className="font-medium">{sub.title}</p>
                                <p className="text-xs text-gray-400">{new Date(sub.timestamp).toLocaleString()}</p>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">{sub.lang}</span>
                                <span className={`text-sm px-3 py-1 rounded-lg font-medium ${
                                  sub.statusDisplay === 'Accepted' 
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                }`}>
                                  {sub.statusDisplay}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* View Full Profile */}
                    <a
                      href={`https://leetcode.com/${leetcodeStats.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View Full Profile on LeetCode
                    </a>

                    <p className="text-xs text-gray-500 text-center">
                      Last synced: {new Date(leetcodeStats.lastUpdated).toLocaleString()}
                    </p>
                  </motion.div>
                )}

                {!leetcodeStats && !isLoadingLeetcode && (
                  <div className="text-center py-8 bg-gray-800/30 rounded-xl border border-gray-700">
                    <Code2 className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-2">No LeetCode profile connected</p>
                    <p className="text-sm text-gray-500">Enter your username above to sync your stats</p>
                  </div>
                )}
              </div>

              {/* Profile Visibility Note */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-blue-400 mb-1">Profile Visibility</h3>
                    <p className="text-sm text-gray-400">
                      Your LeetCode stats are visible to other users. They can click on your name in the leaderboard to view your complete profile and achievements.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Revision Tab */}
          {activeTab === 'revision' && (
            <motion.div
              key="revision"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-purple-400" />
                  <div>
                    <h2 className="text-2xl font-bold">Revision Checklist</h2>
                    <p className="text-gray-400">Review problems you've already solved</p>
                  </div>
                </div>

                {solvedProblems.size === 0 ? (
                  <div className="text-center py-12">
                    <Target className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">No problems solved yet!</p>
                    <p className="text-gray-500 mt-2">Start solving problems to build your revision list</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(problemData).map(([trackName, trackData]) => {
                      const solvedInTrack = [];
                      
                      Object.entries(trackData.weeks).forEach(([weekKey, week]) => {
                        week.days.forEach(day => {
                          day.problems.forEach(problem => {
                            if (solvedProblems.has(problem.id)) {
                              solvedInTrack.push({ ...problem, week: weekKey, topic: day.topic });
                            }
                          });
                        });
                      });

                      if (solvedInTrack.length === 0) return null;

                      return (
                        <div key={trackName} className="bg-gray-700/30 rounded-xl p-4">
                          <h3 className={`font-bold text-lg mb-3 bg-gradient-to-r ${trackData.color} bg-clip-text text-transparent`}>
                            {trackData.title} • {solvedInTrack.length} solved
                          </h3>
                          <div className="space-y-2">
                            {solvedInTrack.map(problem => (
                              <div
                                key={problem.id}
                                className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                              >
                                <div className="flex items-center gap-3 flex-1">
                                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                                  <div className="flex-1">
                                    <p className="font-medium">{problem.title}</p>
                                    <p className="text-sm text-gray-400">{problem.week} • {problem.topic}</p>
                                  </div>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                                    {problem.difficulty}
                                  </span>
                                  <span className="text-yellow-400 font-bold text-sm">{problem.points} pts</span>
                                </div>
                                <a
                                  href={`https://leetcode.com/problems/${problem.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}/`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-3 p-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Revision Stats */}
                {solvedProblems.size > 0 && (
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-green-400">{solvedProblems.size}</p>
                      <p className="text-sm text-gray-400 mt-1">Total Solved</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-blue-400">
                        {Array.from(solvedProblems).filter(id => {
                          for (const track of Object.values(problemData)) {
                            for (const week of Object.values(track.weeks)) {
                              for (const day of week.days) {
                                const problem = day.problems.find(p => p.id === id);
                                if (problem?.difficulty === 'Easy') return true;
                              }
                            }
                          }
                          return false;
                        }).length}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Easy</p>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-600/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-yellow-400">
                        {Array.from(solvedProblems).filter(id => {
                          for (const track of Object.values(problemData)) {
                            for (const week of Object.values(track.weeks)) {
                              for (const day of week.days) {
                                const problem = day.problems.find(p => p.id === id);
                                if (problem?.difficulty === 'Medium') return true;
                              }
                            }
                          }
                          return false;
                        }).length}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Medium</p>
                    </div>
                    <div className="bg-gradient-to-br from-red-500/10 to-pink-600/10 border border-red-500/30 rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-red-400">
                        {Array.from(solvedProblems).filter(id => {
                          for (const track of Object.values(problemData)) {
                            for (const week of Object.values(track.weeks)) {
                              for (const day of week.days) {
                                const problem = day.problems.find(p => p.id === id);
                                if (problem?.difficulty === 'Hard') return true;
                              }
                            }
                          }
                          return false;
                        }).length}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">Hard</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CodeQuestApp;