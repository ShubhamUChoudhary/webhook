USE [machinetest_db]
GO
/****** Object:  StoredProcedure [dbo].[DeleteEmpById]    Script Date: 26-10-2021 18:36:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER procedure [dbo].[DeleteEmpById]  
(  
   @EmpId int  
)  
as   
begin  
   Delete from employee where Id=@EmpId  
End 