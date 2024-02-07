import React from 'react';
import Skills from './Skills';

function Profile() {
  return (
    <div className="container mx-auto">
      <h5 className="m-3 water-fill">Hi there! 👋 I'm Anirudh Madhav Kulkarni</h5>
      <hr className="my-2" />
      <h5 className="m-3">About me</h5>
      <hr className="my-2" />
      <ul className="list-disc list-inside">
        <li>🔭 I’m currently working at MBB Labs, MayBank</li>
        <li>🌱 I’m currently learning JBPM & Springboot</li>
        <li>💬 Ask me about Data Structures & Algorithms</li>
        <li>⚡ Fun fact: I think I am funny 😎🤣</li>
      </ul>
      <h5 className="m-3">Connect with Me</h5>
      <hr className="my-2" />
      <ul className="profile_link list-disc list-inside">
        <li>
          LinkedIn :{' '}
          <a href="https://www.linkedin.com/in/anirudhmadhavkulkarni/">
            anirudh-madhav-kulkarni
          </a>
        </li>
        <li>
          HackerRank :{' '}
          <a href="https://www.hackerrank.com/Anirudh9094?hr_r=1">anirudhkulkarni9094</a>
        </li>
        <li>
          LeetCode : <a href="https://leetcode.com/anirudhkulkarni9094/">anirudhkulkarni9094</a>
        </li>
        <li>
          HackerEarth :{' '}
          <a href="https://www.hackerearth.com/@anirudhkulkarni9094">anirudhkulkarni9094</a>
        </li>
        <li className='break-words'>
          Email :{' '}
          <a href="mailto:Anirudhkulkarni9094@gmail.com">Anirudhkulkarni9094@gmail.com</a>
        </li>
      </ul>
      <h5 className="m-3">Languages and Tools</h5>
      <Skills />
      <hr className="my-2" />
      <h5 className="m-3">Education</h5>
      <hr className="my-2" />
      <ul className="list-disc list-inside">
        <li>Bachelor's of Engineering, Bangalore Institute of Technology, CGPA: 8.4/10</li>
        <li>Kendriya Vidyalaya ASC center, 12th Bangalore, CGPA: 8.7/10</li>
        <li>Kendriya Vidyalaya Island Grounds, 10th Chennai, CGPA: 9.4/10</li>
      </ul>
    </div>
  );
}

export default Profile;
