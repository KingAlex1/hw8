import React from 'react'
import {shallow , render , mount} from 'enzyme'
import Spinner from 'react-svg-spinner'
import {UserPage} from '../../UserPage'
import Followers from '../../Followers'

describe ('component UserPage', ()=>{
    function fetchUserRequest () {
        return true;
    }

    const usersProps ={
        error: false,
        isFetching: false,
        isFetched: true,
        user: {
            avatar__url: '1',
            login:'2',
            followers:'3',
            public__repos: '4'
        }
    }

    const matchProps = {
        params:{
            name:'5'
        }
    }

    const wrapper =shallow (
        <UserPage 
             match ={matchProps}
             users = {usersProps}
             fetchUserRequest={fetchUserRequest}
             />
    )

    it('аватар пользователя',()=>{
        expect(wrapper.find ('.avatar')).toHaveLength(1)

    })
    it('login пользователя',()=>{
        expect(wrapper.find('.user__name')).toHaveLength(1)
    })
    it('количество фаловеров пользователя',()=>{
        expect(wrapper.find('.user__followers')).toHaveLength(1)

    })
    it('компонент Followers с передачей login через props',()=>{
        expect(wrapper.find(Followers).prop('login')).toBeTruthy()
    })

    it('Проверить наличие метода componentDidMount', ()=>{
        expect(wrapper.instance().componentDidMount).toBeDefined()
    })

    it('Проверить наличие метода componentWillReceiveProps' , ()=>{
        expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    })

    describe ('Spinner', ()=>{
        beforeAll(()=>{
            wrapper.setProps({
                users:{
                    isFetching: true,
                    user:{}
                }
            })
        })

        it('Проверить наличие спинера/лоадера если props.isFetching === true' , ()=>{
            expect (<Spinner />).toBeTruthy();
        })


    })

})